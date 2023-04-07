// export {initialCards, validationConfig};
export {initialCards, validationConfig, buttonOpenPopupProfile, popupEditProfile, popupFormEditProfile, profileName, profileJob, popupAdd, openButtonAdd, tempalate, elements, elementsList, formСreation, popupZoomImage};

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

const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__no-submit',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error__text-active'
}; 

const buttonOpenPopupProfile = document.querySelector('.profile__info-button');
const popupEditProfile = document.querySelector('.popup-edit');
const popupFormEditProfile = document.querySelector('.popup__form');
const profileName = document. querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-job');
const popupAdd = document.querySelector('.popup_add');
const openButtonAdd = document.querySelector('.profile__add-button');
const tempalate = document.querySelector('.template').content;
const elements = document.querySelector('.elements');
const elementsList = elements.querySelector('.elements__list');
const formСreation = document.querySelector('.formAdd');
const popupZoomImage = document.querySelector('.popup-window');