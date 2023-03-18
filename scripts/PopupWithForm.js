import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
      super(popupSelector);
      this._submitCallback = submitCallback;
      this._form = this._popup.querySelector('.popup__form');
      this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
      this._submitButton = this._form.querySelector('.popup__save');
    }
  
    _getInputValues() {
      const inputValues = {};
      this._inputList.forEach(input => {
        inputValues[input.name] = input.value;
      });
      return inputValues;
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
  