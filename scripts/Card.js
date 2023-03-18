import { popupExpandImage, popupImage, imageCaption } from "./constants.js";
// import { openPopup } from "./index.js";

export default class Card {
    constructor(object, templateSelector, handleCardClick) {
        this._object = object;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _toggleLikeButton = () => {
        this._likeButton.classList.toggle('element__like-button_type_active');
    }

    _removeElement = () => {
        this.element.remove();
        this.element = null;
    }

    _openImagePopup() {
        openPopup(popupExpandImage);
        popupImage.src = this.currentSrc;
        popupImage.alt = this.alt;
        imageCaption.textContent = this.alt;
    }

    _setValues() {
        this._elementImage.src = this._object.link;
        this._elementImage.alt = this._object.name;
        this._elementTitle.textContent = this._object.name;
    }

    _handleEventListeners() {
        this._likeButton.addEventListener('click', this._toggleLikeButton)

        this._trashButton.addEventListener('click', this._removeElement)

        this._elementImage.addEventListener('click', () => {
            this._handleCardClick({ name: this._object.name, link: this._object.link })
        })
    }

    generateCard() {
        this.element = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        this._elementTitle = this.element.querySelector('.element__title');
        this._elementImage = this.element.querySelector('.element__image');
        this._likeButton = this.element.querySelector('.element__like-button');
        this._trashButton = this.element.querySelector('.element__trash-button');

        this._setValues();
        this._handleEventListeners();

        return this.element;
    }
}