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

import Card from "./Card.js";
import Section from "./Section.js";

export function openPopup(popup) {
    document.addEventListener('keydown', closePopupOnEscape);
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    document.removeEventListener('keydown', closePopupOnEscape);
    popup.classList.remove('popup_opened');
}

function insertValuesFromProfile() {
    titleInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function saveValuesToProfile() {
    // значения сохраняются из input'ов в профиль
    profileTitle.textContent = titleInput.value;;
    profileSubtitle.textContent = jobInput.value;
}

function closePopupOnEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

// 8
// function createElement(obj, templateSelector) {
//     const element = new Card(obj, templateSelector).generateCard();
//     return element;
// }

editButton.addEventListener('click', () => {
    openPopup(popupProfile);
    insertValuesFromProfile();
});

closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

formEditProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    saveValuesToProfile();
    closePopup(popupProfile);
});

// 8
// initialArr.forEach((item) => {
//     const element = createElement(item, templateSelector);
//     elements.append(element);
// });

const initialElements = new Section({items: initialArr, renderer: (item) => {
    const card = new Card(item, templateSelector);
    const element = card.generateCard();
    initialElements.addItem(element);
}}, '.elements')
initialElements.renderItems();

addButton.addEventListener('click', () => { 
    openPopup(popupAddCard), 
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