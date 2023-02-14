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

function removeElement() {
    trashButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest.remove();
            //recalculateElementImages();
            //recalculateTrashbuttons();
            //recalculateLikeButtons();
        })
    })
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
    return element;
}

function clearInputs() {
    nameInput.value = '';
    linkInput.value = '';
}

editButton.addEventListener('click', () => { showPopup(popupProfile); insertValuesFromProfile() });
closeButtons.forEach( () => { closePopups() });
formProfile.addEventListener('submit', (evt) => { 
    evt.preventDefault();
    saveValuesFromInput();
    popupProfile.classList.remove('popup_opened');
    });

// /* 5 спринт */

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

initialCards.forEach((item, index, arr) => {
    const element = createCard(index, arr);
    elements.append(element);
});

addButton.addEventListener('click', () => { showPopup(popupAddCard);  }); // clearInputs()
formAddCard.addEventListener('submit', (evt) => { 
    evt.preventDefault();
    const arr = [
        {
            name: nameInput.value,
            link: linkInput.value
        }
    ];
    const element = createCard(0, arr);
    elements.prepend(element);
    popupAddCard.classList.remove('popup_opened');
});

// function openPopupImage() {
//     elementImages.forEach(image => {
//         image.addEventListener('click', function () {
//             popupExpandImage.classList.add('popup_opened');
//             closePopupImageButton = document.querySelector('.popup__close_type_expand-image');
//             popupImage.src = image.src;
//             popupImage.alt = image.alt;
//             imageCaption.textContent = image.alt;
//             closePopupImage();
//         })
//     })
// }

// function handleFormAddCardSubmit(evt) {
//     evt.preventDefault();
//     linkInputValue = linkInput.value;
//     nameInputValue = nameInput.value;
//     const element = elementTemplate.querySelector('.element').cloneNode(true);
//     element.querySelector('.element__image').src = linkInputValue;
//     element.querySelector('.element__title').textContent = nameInputValue;
//     element.querySelector('.element__image').alt = nameInputValue;
//     elements.prepend(element);
//     recalculateElementImages();
//     recalculateTrashbuttons();
//     recalculateLikeButtons();
//     openPopupImage();
//     likeBtn();
//     removeElement();
//     closePopupAddCard();
// }

// likeBtn();

// removeElement();

// openPopupImage();

// function closePopupImage() {
//     closePopupImageButton.addEventListener('click', function () {
//         popupExpandImage.classList.remove('popup_opened');
//     });
// }