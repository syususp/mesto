import {
    initialArr,
    config,
    popups,
    elements,
    editButton,
    popupProfile,
    popupAddCard,
    closeButtons,
    formEditProfile,
    titleInput,
    jobInput,
    profileTitle,
    profileSubtitle,
    addButton,
    formAddCard,
    nameInput,
    linkInput,
    profileValidation,
    newCardValidation,
    templateSelector,
} from "./constants.js";

import Card from './Card.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

const userInfo = new UserInfo({ profileTitle, profileSubtitle });

const popupWithImage = new PopupWithImage('.popup_type_expand-image');
popupWithImage.setEventListeners();

const popupProfileForm = new PopupWithForm('.popup_type_edit-profile', (evt) => {
        evt.preventDefault();

        popupProfileForm.close();
    }
);
popupProfileForm.setEventListeners();

const popupAddCardForm = new PopupWithForm('.popup_type_add-card', (item) => {
        const card = new Card(item, templateSelector, () => {
            popupWithImage.open(item);
        });
        const cardElement = card.generateCard();
        cardsSection.addItem(cardElement);
    }
);
popupAddCardForm.setEventListeners();

const initialElements = new Section({
    items: initialArr, renderer: (item) => {
        const card = new Card(item, templateSelector, () => {
            popupWithImage.open(item);
        });
        const element = card.generateCard();
        initialElements.addItem(element);
    }
}, '.elements')
initialElements.renderItems();

addButton.addEventListener('click', () => {
    popupAddCardForm.open();
    newCardValidation.resetValidation()
});

editButton.addEventListener('click', () => {
    popupProfileForm.open();
    userInfo.
    newCardValidation.resetValidation()
});

formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const tempArr = {
        name: nameInput.value,
        link: linkInput.value
    };
    const element = createElement(tempArr, templateSelector);
    const submitButton = formAddCard.querySelector('.popup__save');
    elements.prepend(element);
    evt.target.reset();
    newCardValidation.disableButton();
    closePopup(popupAddCard);
});

popups.forEach(popup => {
    popup.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
    });
});

profileValidation.enableValidation();
newCardValidation.enableValidation();