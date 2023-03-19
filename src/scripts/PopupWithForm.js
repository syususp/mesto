import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__save');
  }

  _getInputValues() {
    this._inputTitle = this._form.querySelector('.popup__input_type_title');
    this._inputSubtitle = this._form.querySelector('.popup__input_type_subtitle');
  }

  setInputValues(valuesFromProfile) {
    this._getInputValues();
    this._inputTitle.value = valuesFromProfile.name;
    this._inputSubtitle.value = valuesFromProfile.info;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitCallback(evt);
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
