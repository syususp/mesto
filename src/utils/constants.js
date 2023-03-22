const initialArr = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__save",
  inactiveButtonSelector: "popup__save_inactive",
  inputErrorSelector: "popup__input_type_error",
  errorActiveSelector: "popup__input-error_active",
};

const buttonEdit = document.querySelector(".profile__edit-button");
const popupAddCard = document.querySelector(".popup_type_add-card");
const formEditProfile = document.querySelector(".popup__form_type_edit-profile");
const profileTitleSelector = ".profile__title";
const profileSubtitleSelector = ".profile__subtitle";
const buttonAdd = document.querySelector(".profile__add-button");
const formAddCard = document.querySelector(".popup__form_type_add-card");
const templateSelector = "#element__template";

export {
  initialArr,
  validationConfig,
  buttonEdit,
  popupAddCard,
  formEditProfile,
  profileTitleSelector,
  profileSubtitleSelector,
  buttonAdd,
  formAddCard,
  templateSelector,
};
