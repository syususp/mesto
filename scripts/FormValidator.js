export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
    }

    disableButton(buttonElement) {
        buttonElement.classList.add(this._config.inactiveButtonSelector);
        buttonElement.disabled = true;
    }

    _enableButton(buttonElement) {
        buttonElement.classList.remove(this._config.inactiveButtonSelector);
        buttonElement.disabled = false;
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorSelector);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.errorActiveSelector);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorSelector);
        errorElement.classList.remove(this._config.errorActiveSelector);
        errorElement.textContent = '';
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => !inputElement.validity.valid);
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            this.disableButton(buttonElement);
        } else {
            this._enableButton(buttonElement);
        }
    }

    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        const buttonElement = this._formElement.querySelector(this._config.buttonSelector);
        this.disableButton(buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement);
            })
        })

        this._toggleButtonState(inputList, buttonElement);
    }

    enableValidation() {
        this._setEventListeners();
    }
}