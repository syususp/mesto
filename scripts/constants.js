import FormValidator from "./FormValidator.js";

const initialArr = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__save',
    inactiveButtonSelector: 'popup__save_inactive',
    inputErrorSelector: 'popup__input_type_error',
    errorActiveSelector: 'popup__input-error_active',
};

const popups = document.querySelectorAll('.popup');
const popupExpandImage = document.querySelector('.popup_type_expand-image');
const elementTemplate = document.querySelector('#element__template').content;
const elements = document.querySelector('.elements');
const imageCaption = popupExpandImage.querySelector('.popup__image-title');
const popupImage = popupExpandImage.querySelector('.popup__image');
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const closeButtons = document.querySelectorAll('.popup__close');
const formEditProfile = document.querySelector('.popup__form_type_edit-profile');
const titleInput = document.querySelector('.popup__input_type_title');
const jobInput = document.querySelector('.popup__input_type_subtitle');
// const profileTitle = document.querySelector('.profile__title');
// const profileSubtitle = document.querySelector('.profile__subtitle');
const profileTitle = '.profile__title';
const profileSubtitle = '.profile__subtitle';
const addButton = document.querySelector('.profile__add-button');
const formAddCard = document.querySelector('.popup__form_type_add-card');
const nameInput = document.querySelector('.popup__input_type_name');
const linkInput = document.querySelector('.popup__input_type_link');
const profileValidation = new FormValidator(config, formEditProfile);
const newCardValidation = new FormValidator(config, formAddCard);
const templateSelector = '#element__template';

export {
    initialArr,
    config,
    popups,
    popupExpandImage,
    elementTemplate,
    elements,
    imageCaption,
    popupImage,
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
};