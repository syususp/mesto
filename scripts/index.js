const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const closeButtons = document.querySelectorAll('.popup__close');
const formProfile = document.querySelector('.popup__form_type_edit-profile');

const titleInput = document.querySelector('.popup__input_type_title');
const jobInput = document.querySelector('.popup__input_type_subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const addButton = document.querySelector('.profile__add-button');
const formAddCard = document.querySelector('.popup__form_type_add-card');
const nameInput = document.querySelector('.popup__input_type_name');
const linkInput = document.querySelector('.popup__input_type_link');

const elementTemplate = document.querySelector('#element__template').content;
const elements = document.querySelector('.elements');

const elementImages = Array.from(elements.querySelectorAll('.element__image'));
const likeButtons = Array.from(elements.querySelectorAll('.element__like-button'));
const trashButtons = Array.from(elements.querySelectorAll('.element__trash-button'));

const popupExpandImage = document.querySelector('.popup_type_expand-image');
const popupImage = popupExpandImage.querySelector('.popup__image');
const imageCaption = popupExpandImage.querySelector('.popup__image-title');

function openPopup(popupName) {
    popupName.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function insertValuesFromProfile() {
    titleInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function saveValuesFromInput() {
    profileTitle.textContent = titleInput.value;;
    profileSubtitle.textContent = jobInput.value;
}

function createCard(index, arr) {
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');
    const likeButton = element.querySelector('.element__like-button');
    const trashButton = element.querySelector('.element__trash-button');
    elementImage.src = arr[index].link;
    elementImage.alt = arr[index].name;
    elementTitle.textContent = arr[index].name;
    likeButton.addEventListener('click', () => { 
        likeButton.classList.toggle('element__like-button_type_active');
    })
    trashButton.addEventListener('click', () => { 
        trashButton.closest('.element').remove();
    })
    elementImage.addEventListener('click', function () {
            openPopup(popupExpandImage);
            popupImage.src = arr[index].link;
            popupImage.alt = arr[index].name;
            imageCaption.textContent = arr[index].name;
    })
    return element;
}

function clearInputs() {
    nameInput.value = '';
    linkInput.value = '';
}

editButton.addEventListener('click', () => { openPopup(popupProfile); insertValuesFromProfile() });
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
  });

formProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    saveValuesFromInput();
    closePopup(popupProfile);
});

const arr = [
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

arr.forEach((item, index, arr) => {
    const element = createCard(index, arr);
    elements.append(element);
});

addButton.addEventListener('click', () => { openPopup(popupAddCard); });
formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const tempArr = [
        {
            name: nameInput.value,
            link: linkInput.value
        }
    ];
    const element = createCard(0, tempArr);
    elements.prepend(element);
    evt.target.reset();
    closePopup(popupAddCard);
});