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

function showPopup(popupName) {
    popupName.classList.add('popup_opened');
}

function closePopups() {
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => { 
            popupProfile.classList.remove('popup_opened');
            popupAddCard.classList.remove('popup_opened');
            popupExpandImage.classList.remove('popup_opened')
        });
    });
}

function insertValuesFromProfile() {
    titleInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function saveValuesFromInput() {
    profileTitle.textContent = titleInput.value;;
    profileSubtitle.textContent = jobInput.value;
}

function likeBtn() {
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            button.classList.toggle('element__like-button_type_active');
        })
    })
}

function removeCard() {
    trashButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        button.closest('.element').remove();
        likeButtons.splice(index, 1);
        trashButtons.splice(index, 1);
        elementImages.splice(index, 1);
      });
    });
}

function createCard(index, arr) {
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');
    const likeButton = element.querySelector('.element__like-button');
    const trashButton = element.querySelector('.element__trash-button');
    likeButtons.push(likeButton);
    trashButtons.push(trashButton);
    elementImages.push(elementImage);
    elementImage.src = arr[index].link;
    elementImage.alt = arr[index].name;
    elementTitle.textContent = arr[index].name;
    // likeBtn();
    likeButton.addEventListener('click', function () {
        likeButton.classList.toggle('element__like-button_type_active');
    })
    removeCard();
    openPopupImage();
    return element;
}

function clearInputs() {
    nameInput.value = '';
    linkInput.value = '';
}

function openPopupImage() {
    elementImages.forEach(image => {
        image.addEventListener('click', function () {
            showPopup(popupExpandImage);
            popupImage.src = image.src;
            popupImage.alt = image.alt;
            imageCaption.textContent = image.alt;
            closePopups();
        })
    })
}

editButton.addEventListener('click', () => { showPopup(popupProfile); insertValuesFromProfile() });
closeButtons.forEach( () => { closePopups() });
formProfile.addEventListener('submit', (evt) => { 
    evt.preventDefault();
    saveValuesFromInput();
    popupProfile.classList.remove('popup_opened');
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

addButton.addEventListener('click', () => { showPopup(popupAddCard);  }); // clearInputs() не забыть вернуть
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
    popupAddCard.classList.remove('popup_opened');
});