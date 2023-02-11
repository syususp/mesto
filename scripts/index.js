let editButton = document.querySelector('.profile__edit-button');
let popupEditProfile = document.querySelector('.popup_type_edit-profile');
let popupEditProfileCloseButton = document.querySelector('.popup__close_type_edit-profile');
let formElementEditProfile = document.querySelector('.popup__form_type_edit-profile');
let titleInput = document.querySelector('.popup__input_type_title');
let jobInput = document.querySelector('.popup__input_type_subtitle');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let jobInputValue;
let titleInputValue;

function showPopupEditProfile() {
    popupEditProfile.classList.add('popup_opened');
    titleInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function closePopupEditProfile() {
    popupEditProfile.classList.remove('popup_opened');
}

function handleFormEditProfileSubmit(evt) {
    evt.preventDefault();
    titleInputValue = titleInput.value;
    jobInputValue = jobInput.value;
    profileTitle.textContent = titleInputValue;
    profileSubtitle.textContent = jobInputValue;
    closePopupEditProfile();
}

formElementEditProfile.addEventListener('submit', handleFormEditProfileSubmit);
editButton.addEventListener('click', showPopupEditProfile);
popupEditProfileCloseButton.addEventListener('click', closePopupEditProfile);

/* 5 спринт */

const initialCards = [
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

const elementTemplate = document.querySelector('#element__template').content;
const elements = document.querySelector('.elements');
initialCards.forEach((item, index, arr) => {
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__image').src = arr[index].link;
    element.querySelector('.element__title').textContent = arr[index].name;
    elements.append(element);
});

let addButton = document.querySelector('.profile__add-button');
let popupAddCard = document.querySelector('.popup_type_add-card');
let formElementAddCard = document.querySelector('.popup__form_type_add-card');
let popupAddCardCloseButton = document.querySelector('.popup__close_type_add-card');
let nameInput = document.querySelector('.popup__input_type_name');
let linkInput = document.querySelector('.popup__input_type_link');
let linkInputValue;
let nameInputValue;

function showPopupAddCard() {
    popupAddCard.classList.add('popup_opened');
}

function closePopupAddCard() {
    popupAddCard.classList.remove('popup_opened');
}

function handleFormAddCardSubmit(evt) {
    evt.preventDefault();
    linkInputValue = linkInput.value;
    nameInputValue = nameInput.value;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__image').src = linkInputValue;
    element.querySelector('.element__title').textContent = nameInputValue;
    elements.prepend(element);
    closePopupAddCard();
}

formElementAddCard.addEventListener('submit', handleFormAddCardSubmit);
addButton.addEventListener('click', showPopupAddCard);
popupAddCardCloseButton.addEventListener('click', closePopupAddCard);

let likeButtons = document.querySelectorAll('.element__like-button');
likeButtons.forEach(button => {
    button.addEventListener('click', function () {
        button.classList.toggle('element__like-button_type_active');
    })
})