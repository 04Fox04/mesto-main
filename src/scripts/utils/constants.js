export {validationConfig,
    buttonInfoProfile,
    popupEdit,
    profileJob,
    profileName,
    avatarProfile, 
    template, 
    cardsContainer, 
    popupAddCard, 
    buttonAddCard, 
    popupWindow, 
    formAdd,
    formEdit, 
    popupAvatar,
    buttonEditAvatar,
    formEditAvatar,
    popupDeleteCard};

const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__no-submit',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error__text-active'
}; 

const buttonInfoProfile = document.querySelector(".profile__info-button");
const popupEdit = document.querySelector(".popup-edit");
const profileName = document.querySelector(".profile__info-name");
const profileJob = document.querySelector(".profile__info-job");
const avatarProfile = document.querySelector(".profile__avatar");
const template = document.querySelector(".template").content.querySelector(".elements__item");
const cardsContainer = document.querySelector(".elements__list");
const popupAddCard = document.querySelector(".popup_add");
const buttonAddCard = document.querySelector(".profile__add-button");
const popupWindow = document.querySelector(".popup-window");
const formAdd = document.querySelector(".formAdd");
const formEdit = document.querySelector(".formEdit");
const popupAvatar = document.querySelector(".edit-avatar");
const buttonEditAvatar = document.querySelector(".profile__avatar-edit");
const formEditAvatar = document.querySelector(".popup__form-avatar");
const popupDeleteCard = document.querySelector(".popup_delete-card");

