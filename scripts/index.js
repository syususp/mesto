const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupEditProfileCloseButton = document.querySelector('.popup__close_type_edit-profile');
const formElementEditProfile = document.querySelector('.popup__form_type_edit-profile');
const titleInput = document.querySelector('.popup__input_type_title');
const jobInput = document.querySelector('.popup__input_type_subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
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
    const arrName = arr[index].name;
    const elementImage = element.querySelector('.element__image');
    elementImage.src = arr[index].link;
    elementImage.alt = arrName;
    element.querySelector('.element__title').textContent = arrName;
    elements.append(element);
});

const addButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const formElementAddCard = document.querySelector('.popup__form_type_add-card');
const popupAddCardCloseButton = document.querySelector('.popup__close_type_add-card');
const nameInput = document.querySelector('.popup__input_type_name');
const linkInput = document.querySelector('.popup__input_type_link');
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
    element.querySelector('.element__image').alt = nameInputValue;
    elements.prepend(element);
    recalculateElementImages();
    recalculateTrashbuttons();
    recalculateLikeButtons();
    openPopupImage();
    likeBtn();
    removeElement();
    closePopupAddCard();
}

formElementAddCard.addEventListener('submit', handleFormAddCardSubmit);
addButton.addEventListener('click', showPopupAddCard);
popupAddCardCloseButton.addEventListener('click', closePopupAddCard);

let likeButtons = document.querySelectorAll('.element__like-button');

function recalculateLikeButtons() {
    likeButtons = document.querySelectorAll('.element__like-button');
}
function likeBtn() {
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            button.classList.toggle('element__like-button_type_active');
        })
    })
}

// // вызов для уже добавленных кнопок
likeBtn();

let trashButtons = elements.querySelectorAll('.element__trash-button');

function recalculateTrashbuttons() {
    trashButtons = elements.querySelectorAll('.element__trash-button');
}

function removeElement() {
    trashButtons.forEach(button => {
        button.addEventListener('click', function () {
            button.parentElement.remove();
            recalculateElementImages();
            recalculateTrashbuttons();
            recalculateLikeButtons();
        })
    })
}

// вызов для уже добавленных element'ов
removeElement();

let elementImages = elements.querySelectorAll('.element__image');
const popupExpandImage = document.querySelector('.popup_type_expand-image');
const popupImage = popupExpandImage.querySelector('.popup__image');
const imageCaption = popupExpandImage.querySelector('.popup__image-title');
let closePopupImageButton = document.querySelector('.popup__close_type_expand-image');

function openPopupImage() {
    elementImages.forEach(image => {
        image.addEventListener('click', function () {
            popupExpandImage.classList.add('popup_opened');
            closePopupImageButton = document.querySelector('.popup__close_type_expand-image');
            popupImage.src = image.src;
            popupImage.alt = image.alt;
            imageCaption.textContent = image.alt;
            closePopupImage();
        })
    })
}

// вызов для уже добавленных фото
openPopupImage();

function recalculateElementImages() {
    elementImages = elements.querySelectorAll('.element__image');
}

function closePopupImage() {
    closePopupImageButton.addEventListener('click', function () {
        popupExpandImage.classList.remove('popup_opened');
    });
}