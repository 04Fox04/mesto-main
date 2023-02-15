// открытие/закрытие формы для редактирования профиля
const openButton = document.querySelector('.profile__info-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');
// редактирование профиля
const popupForm = document.querySelector('.popup__form');
const popupName = document. querySelector('.popup__input_type_name');
const popupJob = document.querySelector('.popup__input_type_job')
const profileName = document. querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-job');
// открытие/закрытие формы для добавления карточек 
const popupAdd = document.querySelector('.popup_add');
const openButtonAdd = document.querySelector('.profile__add-button');
const closeButtonAdd = document.querySelector('.popup__add-close');
// инициализация карточек
const tempalate = document.querySelector('.template').content;
const elements = document.querySelector('.elements');
const elementsList = elements.querySelector('.elements__list');
const saveButton = document.querySelector('.popup__add-save');
// добавление карточек
const title = document.querySelector('.popup__input_type_title');
const link = document.querySelector('.popup__input_type_link');
const containerAdd = document.querySelector('.popup__container_add');
// window
const popupWindow = document.querySelector('.popup-window');
const windowImage = document.querySelector('.popup__window-image');
const windowOverlay = document.querySelector('.popup__window-overlay');
const closeButtonWindow = document.querySelector('.popup__window-close')

const handleOpenButtonClick = () => {
    popup.classList.add('popup_opened');
    let name = profileName.textContent;
    let job = profileJob.textContent;
    popupName.value = name;
    popupJob.value = job;
}
const handleCloseButtonClick = () => {
    popup.classList.remove('popup_opened');
}
const handleOpenButtonAddClick = () => {
    popupAdd.classList.add('popup_opened');
}
const handleCloseButtonAddClick = () => {
    popupAdd.classList.remove('popup_opened');
}
function handleFormSubmit(evt) {
    evt.preventDefault (); 
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    handleCloseButtonClick();
}
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
function createCard(nameValue, linkValue) {
    const elementsItem = tempalate.querySelector('.elements__item').cloneNode(true);
    elementsItem.querySelector('.elements__title').textContent = nameValue;
    elementsItem.querySelector('.elements__delete').addEventListener('click', function (evt) {
      evt.target.closest('.elements__item').remove();
    });
    elementsItem.querySelector('.elements__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('elements__like-active');
    });
    const elementsImage = elementsItem.querySelector('.elements__image');
    elementsImage.src = linkValue;
    elementsImage.addEventListener('click', (evt) => {
      popupWindow.classList.add('popup_opened');
      const windowCard = evt.target;
      windowImage.src = windowCard.src;
      windowOverlay.textContent = nameValue;
    });
    return elementsItem;
};
initialCards.forEach((card) => {
  const addCardNew = createCard(card.name, card.link);
  elementsList.append(addCardNew);
});
function createSubmit(evt) {
    evt.preventDefault();
    const addCardNew = createCard(title.value, link.value);
    evt.target.reset();
    elementsList.prepend(addCardNew);
    popupAdd.classList.remove("popup_opened");
};
const elementsTitle = document.querySelector('.elements__title');
const closePopupWindow = () => {
  popupWindow.classList.remove('popup_opened');
}
closeButtonWindow.addEventListener('click', closePopupWindow);
containerAdd.addEventListener('submit', createSubmit);
popupForm.addEventListener('submit', handleFormSubmit); 
openButton.addEventListener('click', handleOpenButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
openButtonAdd.addEventListener('click', handleOpenButtonAddClick);
closeButtonAdd.addEventListener('click', handleCloseButtonAddClick);





