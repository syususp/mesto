import { popupExpandImage, popupImage, imageCaption } from "./constants.js";

export default class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _toggleLikeButton = () => {
    this._buttonLike.classList.toggle("element__like-button_type_active");
  };

  _removeElement = () => {
    this.element.remove();
    this.element = null;
  };

  _setValues() {
    this._elementImage.src = this._cardData.link;
    this._elementImage.alt = this._cardData.name;
    this._elementTitle.textContent = this._cardData.name;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener("click", this._toggleLikeButton);

    this._trashButton.addEventListener("click", this._removeElement);

    this._elementImage.addEventListener("click", () => {
      this._handleCardClick(this._cardData);
    });
  }

  generateCard() {
    this.element = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    this._elementTitle = this.element.querySelector(".element__title");
    this._elementImage = this.element.querySelector(".element__image");
    this._buttonLike = this.element.querySelector(".element__like-button");
    this._trashButton = this.element.querySelector(".element__trash-button");

    this._setValues();
    this._setEventListeners();

    return this.element;
  }
}
