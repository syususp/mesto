export default class Card {
  constructor(cardData, templateSelector, handleCardClick, currentUserId, handleLike, handleDelete) {
    this._cardData = cardData;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._currentUserId = currentUserId;
    this._handleLike = handleLike;
    this._handleDelete = handleDelete;
  }

  toggleLikeButton = () => {
    this._buttonLike.classList.toggle("element__like-button_type_active");
  };

  updateLikeCounter() {
    this._likeCounter.textContent = this._cardData.likes.length;
  }

  // _removeElement = () => {
  //   this.element.remove();
  //   this.element = null;
  // };

  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => this._handleLike(this));

    this._trashButton.addEventListener("click", () => this._handleDelete(this));

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
      this._trashButton.classList.remove("element__trash-button_hidden");
    } else {
      this._trashButton.classList.add("element__trash-button_hidden");
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
