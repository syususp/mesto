function openPopup(popup) {
    popup.classList.add('popup_opened');
    saveButtons.forEach(disableButton);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupOnEscape);
}

function insertValuesFromProfile() {
    titleInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function saveValuesToProfile() {
    // значения сохраняются в профиль
    profileTitle.textContent = titleInput.value;;
    profileSubtitle.textContent = jobInput.value;
}

function createCard(obj) {
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const elementTitle = element.querySelector('.element__title');
    const elementImage = element.querySelector('.element__image');
    const likeButton = element.querySelector('.element__like-button');
    const trashButton = element.querySelector('.element__trash-button');
    elementImage.src = obj.link;
    elementImage.alt = obj.name;
    elementTitle.textContent = obj.name;
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('element__like-button_type_active');
    })
    trashButton.addEventListener('click', () => {
        trashButton.closest('.element').remove();
    })
    elementImage.addEventListener('click', function () {
        openPopup(popupExpandImage);
        popupImage.src = obj.link;
        popupImage.alt = obj.name;
        imageCaption.textContent = obj.name;
    })
    return element;
}

editButton.addEventListener('click', () => { openPopup(popupProfile); insertValuesFromProfile() });
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

formProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    saveValuesToProfile();
    closePopup(popupProfile);
});

initialArr.forEach((item) => {
    const element = createCard(item);
    elements.append(element);
});

addButton.addEventListener('click', () => { openPopup(popupAddCard); });
formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const tempArr = {
            name: nameInput.value,
            link: linkInput.value
    };
    const element = createCard(tempArr);
    elements.prepend(element);
    evt.target.reset();
    // никак не получается реализовать выключение кнопки при повторном открытии попапа после добавления карточки
    // пробовал выключать в функции открытия/закрытия, в слушателе попапа, отдельно вызывать - не выходит
    // прошу помощи
    disableButton(button)
    closePopup(popupAddCard);
});

popups.forEach(popup => {
    popup.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
    });

    function closePopupOnEscape(evt) {
        if (evt.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_opened');
            if (openedPopup) {
                closePopup(openedPopup);
            }
        }     
    }
    
    document.addEventListener('keydown', closePopupOnEscape);
    // также не получается реализовать удаление слушателя события 'keydown', как бы не изощрялся
    // в Пачке кураторы оффлайн, не подсказывают, а времени мало
    // прошу подсказать вас
});
