import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
  constructor(popupSelector, submitCallback, cardData) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._buttonConfirm = this._popup.querySelector(".popup__confirm-button");
    this._cardData = cardData;
  }

  deleteCard() {
    api
      .deleteCard(this._cardData._id)
      .then(() => {
        if (this.element) {
          this.element.remove();
          this.element = null;
          super.close();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm.addEventListener("click", (evt) => {
      evt.preventDefault();
      if (this._submitCallback) {
        this._submitCallback();
        if (this._confirmed) {
          this.deleteCard();
        }
      }
    });
  }

  setSubmitCallback(submitCallback) {
    this._submitCallback = submitCallback;
  }
}
