import "./pages/index.css";

import {
  initialArr,
  popups,
  editButton,
  titleInput,
  jobInput,
  profileTitle,
  profileSubtitle,
  addButton,
  nameInput,
  linkInput,
  profileValidation,
  newCardValidation,
  templateSelector,
} from "./scripts/constants.js";

import Card from "./scripts/Card.js";
import Section from "./scripts/Section.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import UserInfo from "./scripts/UserInfo.js";

const userInfo = new UserInfo({
  nameSelector: profileTitle,
  infoSelector: profileSubtitle,
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

const popupAddCardForm = new PopupWithForm(".popup_type_add-card", (evt) => {
  evt.preventDefault();
  const cardData = {
    name: nameInput.value,
    link: linkInput.value,
  };

  const newCard = new Section(
    {
      items: cardData,
      renderer: (item) => {
        const card = new Card(item, templateSelector, () => {
          popupWithImage.open(item);
        });
        const element = card.generateCard();
        newCard.addItem(element);
      },
    },
    ".elements"
  );
  newCard.renderItems();

  popupAddCardForm.close();
});
popupAddCardForm.setEventListeners();

const cardsSection = new Section(
  {
    items: initialArr,
    renderer: (item) => {
      const card = new Card(item, templateSelector, () => {
        popupWithImage.open(item);
      });
      const element = card.generateCard();
      cardsSection.addItem(element);
    },
  },
  ".elements"
);
cardsSection.renderItems();

const popupAddCard = () => {
  popupAddCardForm.open();
  newCardValidation.resetValidation();
};
addButton.addEventListener("click", popupAddCard);

editButton.addEventListener("click", () => {
  popupProfileForm.open();
  const valuesFromProfile = userInfo.getUserInfo();
  popupProfileForm.setInputValues(valuesFromProfile);
  newCardValidation.resetValidation();
});

profileValidation.enableValidation();
newCardValidation.enableValidation();
