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
const profileAvatarSelector = ".profile__avatar";
const buttonAdd = document.querySelector(".profile__add-button");
const formAddCard = document.querySelector(".popup__form_type_add-card");
const formEditAvatar = document.querySelector(".popup__form_type_edit-avatar");
const templateSelector = "#element__template";
const avatarEditElement = document.querySelector(".profile__avatar")

export {
  validationConfig,
  buttonEdit,
  popupAddCard,
  formEditProfile,
  profileTitleSelector,
  profileSubtitleSelector,
  profileAvatarSelector,
  buttonAdd,
  formAddCard,
  formEditAvatar,
  templateSelector,
  avatarEditElement,
};
