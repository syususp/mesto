function openPopup(popup) {
    document.addEventListener('keydown', closePopupOnEscape);
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    document.removeEventListener('keydown', closePopupOnEscape);
    popup.classList.remove('popup_opened');
}

function insertValuesFromProfile() {
    config.titleInput.value = config.profileTitle.textContent;
    config.jobInput.value = config.profileSubtitle.textContent;
}

function saveValuesToProfile() {
    // значения сохраняются из input'ов в профиль
    config.profileTitle.textContent = config.titleInput.value;;
    config.profileSubtitle.textContent = config.jobInput.value;
}

function createCard(obj) {
    const element = config.elementTemplate.querySelector('.element').cloneNode(true);
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
        openPopup(config.popupExpandImage);
        config.popupImage.src = obj.link;
        config.popupImage.alt = obj.name;
        config.imageCaption.textContent = obj.name;
    })
    return element;
}

function closePopupOnEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

config.editButton.addEventListener('click', () => { openPopup(config.popupProfile); insertValuesFromProfile() });
config.closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

config.formProfile.addEventListener('submit', (evt) => {
    evt.preventDefault();
    saveValuesToProfile();
    closePopup(config.popupProfile);
});

initialArr.forEach((item) => {
    const element = createCard(item);
    config.elements.append(element);
});

config.addButton.addEventListener('click', () => { openPopup(config.popupAddCard)});
config.formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const tempArr = {
            name: config.nameInput.value,
            link: config.linkInput.value
    };
    const element = createCard(tempArr);
    const submitButton = config.formAddCard.querySelector('.popup__save');
    config.elements.prepend(element);
    evt.target.reset();
    disableButton(submitButton);
    closePopup(config.popupAddCard);
});

config.popups.forEach(popup => {
    popup.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
    });
});
