import "./index.css";

import {
  // initialArr,
  buttonEdit,
  profileTitleSelector,
  profileSubtitleSelector,
  buttonAdd,
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
import { api } from "../components/Api.js";

const userInfo = new UserInfo({
  nameSelector: profileTitleSelector,
  infoSelector: profileSubtitleSelector,
  
});

const popupWithImage = new PopupWithImage(".popup_type_expand-image");
popupWithImage.setEventListeners();

const popupProfileForm = new PopupWithForm(
  ".popup_type_edit-profile",
  (formData) => {
    userInfo.setUserInfo(formData);
    popupProfileForm.close();
  }
);
popupProfileForm.setEventListeners();

const createCard = (cardData) => {
  const card = new Card(cardData, templateSelector, () => {
    popupWithImage.open(cardData);
  });
  const cardElement = card.generateCard();
  return cardElement;
};

const popupAddCardForm = new PopupWithForm(
  ".popup_type_add-card",
  (formData) => {
    const cardElement = createCard(formData);
    cardsSection.addItem(cardElement);
    popupAddCardForm.close();
  }
);
popupAddCardForm.setEventListeners();

api.getInitialCards()
  .then((initialArr) => {
    const cardsSection = new Section(
      {
        items: initialArr,
        renderer: createCard,
      },
      ".elements"
    );
    cardsSection.renderItems();
  })
  .catch((error) => {
    console.log(error);
  });

const openAddCardPopup = () => {
  popupAddCardForm.open();
  newCardValidation.resetValidation();
};
buttonAdd.addEventListener("click", openAddCardPopup);

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
