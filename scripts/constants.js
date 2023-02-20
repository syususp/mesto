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

const config = {};

config.formsSelector = document.querySelectorAll('.popup__form');
config.popups = document.querySelectorAll('.popup');
config.popupExpandImage = document.querySelector('.popup_type_expand-image');
config.elementTemplate = document.querySelector('#element__template').content;
config.elements = document.querySelector('.elements');
config.imageCaption = config.popupExpandImage.querySelector('.popup__image-title');
config.popupImage = config.popupExpandImage.querySelector('.popup__image');
config.editButton = document.querySelector('.profile__edit-button');
config.popupProfile = document.querySelector('.popup_type_edit-profile');
config.popupAddCard = document.querySelector('.popup_type_add-card');
config.closeButtons = document.querySelectorAll('.popup__close');
config.formProfile = document.querySelector('.popup__form_type_edit-profile');
config.titleInput = document.querySelector('.popup__input_type_title');
config.jobInput = document.querySelector('.popup__input_type_subtitle');
config.profileTitle = document.querySelector('.profile__title');
config.profileSubtitle = document.querySelector('.profile__subtitle');
config.addButton = document.querySelector('.profile__add-button');
config.formAddCard = document.querySelector('.popup__form_type_add-card');
config.nameInput = document.querySelector('.popup__input_type_name');
config.linkInput = document.querySelector('.popup__input_type_link');
config.saveButtons = document.querySelectorAll('.popup__save');
config.formList = Array.from(config.formsSelector);