import {Card, initialCards} from "./Card.js";
// import {FormValidator, Card} from "./validate.js";

// const card = new Card(initialCards);
// card.render();


// открытие/закрытие формы для редактирования профиля
const buttonOpenPopupProfile = document.querySelector('.profile__info-button');
const popupEditProfile = document.querySelector('.popup-edit');
const buttonEditClose = document.querySelector('.popup__close');
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
const formAdd = document.querySelector('.formAdd');
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

function closePopupEsc (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
}
function openPopup (element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}
const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((element) => {
  element.addEventListener("click", (evt) => {
  closePopup(evt.target)
  });
});
function closePopup (element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
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
function openZoomImage () {
  openPopup(popupZoomImage);
  windowImage.src = this.link;
  windowImage.alt = this.name;
  popupZoomTitle.textContent = this.name;
}
initialCards.forEach((item) => {
  const card = new Card (item.name, item.link, tempalate, openZoomImage);
  const elementCreateCard = card.generateCard();
  elementsList.append(elementCreateCard);
});
function submiteCreateForm(evt) {
    evt.preventDefault();
    const elementArrayImage = new Card(title.value, link.value, tempalate, openZoomImage);
    const elementCreateCard = elementArrayImage.generateCard();
    elements.prepend(elementCreateCard);
    closePopup(popupAdd);
    formAdd.reset();
};
// function createCard(nameValue, linkValue) {
//     const elementsItem = tempalate.querySelector('.elements__item').cloneNode(true);
//     elementsItem.querySelector('.elements__title').textContent = nameValue;
// ----------------
//     elementsItem.querySelector('.elements__delete').addEventListener('click', function (){
//       elementsItem.remove();
//     });
//     elementsItem.querySelector('.elements__like').addEventListener('click', function (evt) {
//       evt.target.classList.toggle('elements__like-active');
//     });
// ---------------
//     const elementsImage = elementsItem.querySelector('.elements__image');
//     elementsImage.src = linkValue;
//     elementsImage.alt = nameValue;
//     elementsImage.addEventListener('click', (evt) => {
//       const windowCard = evt.target;
//       windowImage.src = windowCard.src;
//       windowImage.alt = nameValue;
//       popupZoomTitle.textContent = nameValue;
//       openPopup(popupZoomImage);
//     });
//     return elementsItem;
// };





buttonWindowClose.addEventListener('click', () => { closePopup(popupZoomImage)});
containerAdd.addEventListener('submit', submiteCreateForm);
popupFormEditProfile.addEventListener('submit', submiteEditForm); 
buttonOpenPopupProfile.addEventListener('click', openPopupEdit);
buttonEditClose.addEventListener('click', () => { closePopup(popupEditProfile)});
openButtonAdd.addEventListener('click', () => { 
  openPopup(popupAdd);
  popupAddSubmit.classList.add('popup__no-submit');
});
buttonAddClose.addEventListener('click', () => { closePopup(popupAdd)});