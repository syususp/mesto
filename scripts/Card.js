/*
function createCard(obj) {
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');
    const likeButton = element.querySelector('.element__like-button');
    const trashButton = element.querySelector('.element__trash-button');
    elementImage.src = obj.link;
    elementImage.alt = obj.name;
    elementTitle.textContent = obj.name;
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('element__like-button_type_active');
    })
    trashButton.addEventListener('click', () => {
        trashButton.closest('.element').remove();
    })
    elementImage.addEventListener('click', function () {
        openPopup(popupExpandImage);
        popupImage.src = obj.link;
        popupImage.alt = obj.name;
        imageCaption.textContent = obj.name;
    })
    return element;
}
*/

class Card {
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
            popupImage.src = this._object.link;
            popupImage.alt = this._object.name;
            imageCaption.textContent = this._object.name;
        })
    }

    generateCard() {
        this._setValues()
        this._handleEventListeners();
        return this._element;
    }
}