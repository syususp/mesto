import "./index.css";

import {
  initialArr,
  buttonEdit,
  profileTitleSelector,
  profileSubtitleSelector,
  addButton,
  nameInput,
  linkInput,
  templateSelector,
  validationConfig,
  formEditProfile,
  formAddCard,
} from "../utils/constants.js";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

const userInfo = new UserInfo({
  nameSelector: profileTitleSelector,
  infoSelector: profileSubtitleSelector,
});

const popupWithImage = new PopupWithImage(".popup_type_expand-image");
popupWithImage.setEventListeners();

const popupProfileForm = new PopupWithForm(
  ".popup_type_edit-profile",
  (evt, formData) => {
    evt.preventDefault();
    const { name, info } = formData;
    userInfo.setUserInfo({ name, info });
    popupProfileForm.close();
  }
);
popupProfileForm.setEventListeners();

const renderCard = (item) => {
  const card = new Card(item, templateSelector, () => {
    popupWithImage.open(item);
  });
  const element = card.generateCard();
  cardsSection.addItem(element);
};

const popupAddCardForm = new PopupWithForm(".popup_type_add-card", (evt) => {
  evt.preventDefault();
  const cardData = {
    name: nameInput.value,
    link: linkInput.value,
  };

  renderCard(cardData), popupAddCardForm.close();
});
popupAddCardForm.setEventListeners();

const cardsSection = new Section(
  {
    items: initialArr,
    renderer: renderCard,
  },
  ".elements"
);
cardsSection.renderItems();

const popupAddCard = () => {
  popupAddCardForm.open();
  newCardValidation.resetValidation();
};
addButton.addEventListener("click", popupAddCard);

buttonEdit.addEventListener("click", () => {
  popupProfileForm.open();
  const valuesFromProfile = userInfo.getUserInfo();
  popupProfileForm.setInputValues(valuesFromProfile);
  newCardValidation.resetValidation();
});

const profileValidation = new FormValidator(validationConfig, formEditProfile);
const newCardValidation = new FormValidator(validationConfig, formAddCard);

profileValidation.enableValidation();
newCardValidation.enableValidation();
