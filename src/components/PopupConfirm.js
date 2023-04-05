﻿import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._buttonConfirm = this._popup.querySelector(".popup__confirm-button");
  }

  deleteCard() {
    if (this.element) {
      this.element.remove();
      this.element = null;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (this._submitCallback) {
        this._submitCallback();
      }
    });
  }
}
