import { elementTemplate, popupExpandImage, popupImage, imageCaption } from "./constants.js";
import { openPopup } from "./index.js";

export default class Card {
    constructor(object) {
        this._object = object;
        this._element = elementTemplate.querySelector('.element').cloneNode(true);
        this._elementTitle = this._element.querySelector('.element__title');
        this._elementImage = this._element.querySelector('.element__image');
        this._likeButton = this._element.querySelector('.element__like-button');
        this._trashButton = this._element.querySelector('.element__trash-button');
    }

    _setValues() {
        this._elementImage.src = this._object.link;
        this._elementImage.alt = this._object.name;
        this._elementTitle.textContent = this._object.name;
    }

    _handleEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._likeButton.classList.toggle('element__like-button_type_active');
        })

        this._trashButton.addEventListener('click', () => {
            this._trashButton.closest('.element').remove();
        })

        this._elementImage.addEventListener('click', function () {
            openPopup(popupExpandImage);
            popupImage.src = this.currentSrc;
            popupImage.alt = this.alt;
            imageCaption.textContent = this.alt;
        })
    }

    generateCard() {
        this._setValues()
        this._handleEventListeners();
        return this._element;
    }
}