const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorSelector);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorActiveSelector);
}

const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorSelector);
    errorElement.classList.remove(config.errorActiveSelector);
    errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
        hideInputError(formElement, inputElement, config);
    }
};

const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.buttonSelector);
    disableButton(buttonElement, config);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        });
    });

    toggleButtonState(inputList, buttonElement, config);
};


const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, config);
    });
};


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

function disableButton(buttonElement, config) {
    buttonElement.classList.add(config.inactiveButtonSelector);
    buttonElement.disabled = true;
}

function enableButton(buttonElement, config) {
    buttonElement.classList.remove(config.inactiveButtonSelector);
    buttonElement.disabled = false;
}

const toggleButtonState = (inputList, buttonElement, config) => {
    if (hasInvalidInput(inputList)) {
        disableButton(buttonElement, config);
    } else {
        enableButton(buttonElement, config);
    }
};

enableValidation(config);
