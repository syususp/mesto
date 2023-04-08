import "./index.css";

import {
  buttonEdit,
  profileTitleSelector,
  profileSubtitleSelector,
  buttonAdd,
  templateSelector,
  validationConfig,
  formEditProfile,
  formAddCard,
  formEditAvatar,
  profileAvatarSelector,
  avatarEditElement,
} from "../utils/constants.js";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { api } from "../components/Api.js";
import PopupConfirm from "../components/PopupConfirm.js";

const userInfo = new UserInfo({
  nameSelector: profileTitleSelector,
  infoSelector: profileSubtitleSelector,
  avatarSelector: profileAvatarSelector,
});

const popupConfirmation = new PopupConfirm(".popup_type_confirm", () => {
  popupConfirmation.deleteCard();
});
popupConfirmation.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_type_expand-image");
popupWithImage.setEventListeners();

const popupProfileForm = new PopupWithForm(
  ".popup_type_edit-profile",
  (formData) => {
    api
      .setUserInfo(formData)
      .then((formData) => {
        userInfo.setUserInfo(formData);
        popupProfileForm.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupProfileForm.renderLoading(false);
      });
  }
);
popupProfileForm.setEventListeners();

const handleLike = (cardInstance) => {
  const isLiked = cardInstance.isLiked();

  if (isLiked) {
    api
      .unlikeCard(cardInstance.getCardId())
      .then((updatedCard) => {
        cardInstance.setLikes(updatedCard.likes);
        cardInstance.updateLikeCounter();
        cardInstance.toggleLikeButton();
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    api
      .likeCard(cardInstance.getCardId())
      .then((updatedCard) => {
        cardInstance.setLikes(updatedCard.likes);
        cardInstance.updateLikeCounter();
        cardInstance.toggleLikeButton();
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const handleDelete = (cardInstance) => {
  popupConfirmation.open();
  popupConfirmation.setSubmitCallback(() => {
    api
      .deleteCard(cardInstance.getCardId())
      .then(() => {
        if (cardInstance.element) {
          cardInstance.removeElement();
        }
        popupConfirmation.close();
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const createCard = (cardData) => {
  const card = new Card(
    cardData,
    templateSelector,
    () => {
      popupWithImage.open(cardData);
    },
    userInfo.getUserId(),
    handleLike,
    handleDelete
  );
  const cardElement = card.generateCard();
  return cardElement;
};

let cardsSection;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo(userData);

    cardsSection = new Section(
      {
        renderer: createCard,
      },
      ".elements"
    );
    cardsSection.renderItems(initialCards);
  })
  .catch((error) => {
    console.log(error);
  });

const popupAddCardForm = new PopupWithForm(
  ".popup_type_add-card",
  (formData) => {
    api
      .addCard(formData)
      .then((cardData) => {
        const cardElement = createCard(cardData);
        cardsSection.addItem(cardElement);
        popupAddCardForm.close();
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
popupAddCardForm.setEventListeners();

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

const openAvatarEditPopup = () => {
  popupProfileAvatar.open();
  avatarValidation.resetValidation();
};
avatarEditElement.addEventListener("click", openAvatarEditPopup);

const popupProfileAvatar = new PopupWithForm(
  ".popup_type_edit-avatar",
  (formData) => {
    api
      .setUserAvatar(formData)
      .then((formData) => {
        userInfo.setUserAvatar(formData);
        popupProfileAvatar.close();
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
popupProfileAvatar.setEventListeners();

const avatarValidation = new FormValidator(validationConfig, formEditAvatar);
avatarValidation.enableValidation();
