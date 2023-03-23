import {Card} from "./Card.js";
import {FormValidator} from "./validate.js";
import {initialCards, validationConfig } from "./constants.js"

// открытие/закрытие формы для редактирования профиля
const buttonOpenPopupProfile = document.querySelector('.profile__info-button');
const popupEditProfile = document.querySelector('.popup-edit');
const buttonEditClose = document.querySelector('.popup__close');
const formEdit = document.querySelector('.formEdit');
// редактирование профиля
const popupFormEditProfile = document.querySelector('.popup__form');
const popupName = document. querySelector('.popup__input_type_name');
const popupJob = document.querySelector('.popup__input_type_job')
const profileName = document. querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-job');
// открытие/закрытие формы для добавления карточек 
const popupAdd = document.querySelector('.popup_add');
const openButtonAdd = document.querySelector('.profile__add-button');
const buttonAddClose = document.querySelector('.popup__add-close');
// инициализация карточек
const tempalate = document.querySelector('.template').content;
const elements = document.querySelector('.elements');
const elementsList = elements.querySelector('.elements__list');
const formСreation = document.querySelector('.formAdd');
// добавление карточек
const title = document.querySelector('.popup__input_type_title');
const link = document.querySelector('.popup__input_type_link');
const containerAdd = document.querySelector('.popup__container_add');
const popupAddSubmit = document.querySelector('.popup__add-save');
// popupZoom
const popupZoomImage = document.querySelector('.popup-window');
const windowImage = document.querySelector('.popup__window-image');
const popupZoomTitle = document.querySelector('.popup__zoom-title');
const buttonWindowClose = document.querySelector('.popup__window-close')

function closePopupByEsc (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
}
function openPopup (element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}
const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((element) => {
  element.addEventListener("click", (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
    };
  });
});
function closePopup (element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}
const openPopupEdit = () => {
  openPopup (popupEditProfile);
  const name = profileName.textContent;
  const job = profileJob.textContent;
  popupName.value = name;
  popupJob.value = job;
}
function submiteEditForm(evt) {
  evt.preventDefault (); 
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  closePopup(popupEditProfile);
}
function openZoomImage (name, link) {
  openPopup(popupZoomImage);
  windowImage.src = link;
  windowImage.alt = name;
  popupZoomTitle.textContent = name;
}
initialCards.forEach((item) => {
  elementsList.append(createCard(item.link, item.name));
});
function createCard(link, name) {
  const card = new Card (name, link, tempalate, openZoomImage);
  const elementCreateCard = card.generateCard();
  return elementCreateCard;
}
function submiteCreateForm(evt) {
  evt.preventDefault();
  const elementArrayImage = new Card(title.value, link.value, tempalate, openZoomImage);
  const elementCreateCard = elementArrayImage.generateCard();
  elementsList.prepend(elementCreateCard);
  closePopup(popupAdd);
  formСreation.reset();
};

buttonWindowClose.addEventListener('click', () => { closePopup(popupZoomImage)});
containerAdd.addEventListener('submit', submiteCreateForm);
popupFormEditProfile.addEventListener('submit', submiteEditForm); 
buttonOpenPopupProfile.addEventListener('click', openPopupEdit);
buttonEditClose.addEventListener('click', () => { closePopup(popupEditProfile)});
openButtonAdd.addEventListener('click', () => { openPopup(popupAdd);
   formValidAdd.toggleButtonState();
});
buttonAddClose.addEventListener('click', () => { closePopup(popupAdd)});

const formValidEdit = new FormValidator(validationConfig, formEdit);
formValidEdit.enableValidation();
const formValidAdd = new FormValidator(validationConfig, formСreation);
formValidAdd.enableValidation();