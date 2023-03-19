import './pages/index.css';

import {
    initialArr,
    popups,
    editButton,
    titleInput,
    jobInput,
    profileTitle,
    profileSubtitle,
    addButton,
    nameInput,
    linkInput,
    profileValidation,
    newCardValidation,
    templateSelector,
} from "./scripts/constants.js";

import Card from './scripts/Card.js';
import Section from './scripts/Section.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';

const userInfo = new UserInfo({ nameSelector: profileTitle, infoSelector: profileSubtitle });

const popupWithImage = new PopupWithImage('.popup_type_expand-image');
popupWithImage.setEventListeners();

const popupProfileForm = new PopupWithForm('.popup_type_edit-profile', (evt) => {
    evt.preventDefault();
    const name = titleInput.value;
    const info = jobInput.value;
    userInfo.setUserInfo({ name, info });
    popupProfileForm.close();
}
);
popupProfileForm.setEventListeners();

const popupAddCardForm = new PopupWithForm('.popup_type_add-card', (evt) => {
    evt.preventDefault();
    const tempArr = {
        name: nameInput.value,
        link: linkInput.value,
    }

    const newCard = new Section({
        items: tempArr, renderer: (item) => {
            const card = new Card(item, templateSelector, () => {
                popupWithImage.open(item);
            });
            const element = card.generateCard();
            newCard.addItem(element);
        }
    }, '.elements')
    newCard.renderItems();
});
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
    const valuesFromProfile = userInfo.getUserInfo();
    popupProfileForm.setInputValues(valuesFromProfile);
    newCardValidation.resetValidation()
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