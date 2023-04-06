import { popupConfirmation } from "../pages/index.js";
import { api } from "./Api.js";

export default class Card {
  constructor(cardData, templateSelector, handleCardClick, currentUserId) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._currentUserId = currentUserId;
  }

  _toggleLikeButton = () => {
    this._buttonLike.classList.toggle("element__like-button_type_active");
  };

  _removeElement = () => {
    this.element.remove();
    this.element = null;
  };

  _setEventListeners() {
    this._buttonLike.addEventListener("click", this._toggleLikeButton);

    this._trashButton.addEventListener("click", () => {
      popupConfirmation.open();
      popupConfirmation.setSubmitCallback(() => {
        popupConfirmation._confirmed = true;
      });
      popupConfirmation.deleteCard = () => {
        api
          .deleteCard(this._cardData._id)
          .then(() => {
            if (this.element) {
              this.element.remove();
              this.element = null;
            }
            popupConfirmation.close();
          })
          .catch((error) => {
            console.log(error);
          });
      };
    });

    this._elementImage.addEventListener("click", () => {
      this._handleCardClick(this._cardData);
    });
  }

  _setValues() {
    this._elementImage.src = this._cardData.link;
    this._elementImage.alt = this._cardData.name;
    this._elementTitle.textContent = this._cardData.name;
    this._likeCounter.textContent = this._cardData.likes.length;

    if (this._cardData.owner._id === this._currentUserId) {
      this._trashButton.style.display = "block";
    } else {
      this._trashButton.style.display = "none";
    }
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
    this._likeCounter = this.element.querySelector(".element__like-counter");

    this._setValues();
    this._setEventListeners();

    return this.element;
  }
}
