import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    const inputValues = this._form.querySelectorAll(".popup__input");
    const formData = {};
    inputValues.forEach((inputValue) => {
      formData[inputValue.name] = inputValue.value;
    });

    return formData;
  }

  setInputValues(valuesFromProfile) {
    const inputValues = this._form.querySelectorAll(".popup__input");
    inputValues.forEach((inputValue) => {
      inputValue.value = valuesFromProfile[inputValue.name];
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
