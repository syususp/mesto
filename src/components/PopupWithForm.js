import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector(".popup__form");
    this._inputElements = this._form.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const formData = {};
    this._inputElements.forEach((inputElement) => {
      formData[inputElement.name] = inputElement.value;
    });

    return formData;
  }

  setInputValues(formData) {
      this._inputElements.forEach((inputElement) => {
      inputElement.value = formData[inputElement.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback(evt, this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
