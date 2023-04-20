import "./index.css";
import Card from "../scripts/Components/Card.js";
import Section from "../scripts/Components/Section.js";
import PopupWithForm from "../scripts/Components/PopupWithForm.js";
import PopupWithImage from "../scripts/Components/PopupWithImage.js";
import UserInfo from "../scripts/Components/UserInfo.js";
import FormValidator from "../scripts/Components/Validate.js";
import {validationConfig, buttonOpenPopupProfile, popupEditProfile, popupFormEditProfile, profileName, profileJob, popupAdd, openButtonAdd, tempalate, elements, elementsList, formСreation, popupZoomImage, ButtonAvatarEdit} from "../scripts/utils/constants.js"
//--------
import Api from "../scripts/Components/Api.js";
//--------


// fetch('https://mesto.nomoreparties.co/v1/cohort-64/cards', {
//   headers: {
//     authorization: '370c2e24-51f6-42f1-a96f-2c7119c66fcc'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });

const validateEdit = new FormValidator(validationConfig, popupFormEditProfile);
validateEdit.enableValidation()
const validateAdd = new FormValidator(validationConfig, formСreation);
validateAdd.enableValidation()

const userInfo = new UserInfo ({userName: profileName, userJob: profileJob});
const handlerEditProfile = (data) => {
  userInfo.setUserInfo(data.name, data.job);
  formEdit.close();
}
const formEdit = new PopupWithForm(popupEditProfile, handlerEditProfile);
formEdit.setEventListeners();

const popupImage = new PopupWithImage(popupZoomImage);
popupImage.setEventListeners();

const openZoomImage = (name, link) => popupImage.open(name, link);

const rendererCard = (item) => {
  section.addItem(createCard(item));
}

function createCard(data) {
  const card = new Card (data.name, data.link, tempalate, openZoomImage);
  return card.generateCard();
}

// const section = new Section({items: initialCards, renderer: rendererCard}, elementsList)
// section.renderer();

const handlerAddProfile = (data) => {
  rendererCard(data);
  formAdd.close();
}
buttonOpenPopupProfile.addEventListener('click', () => {
  formEdit.open(); 
  formEdit.setInputValues(userInfo.getUserInfo());
});

const formAdd = new PopupWithForm(popupAdd, handlerAddProfile)
formAdd.setEventListeners();

openButtonAdd.addEventListener('click', () => {
  formAdd.open(); 
  validateAdd.toggleButtonState();
});

// ButtonAvatarEdit.addEventListener('click', () => {
//   formEdit.open(); 
//   formEdit.setInputValues(userInfo.getUserInfo());
// });


const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-64/cards',
  headers: {
    'Content-Type': 'application/json',
    authorization: '370c2e24-51f6-42f1-a96f-2c7119c66fcc'
  }
})

api.getInitialCards()
  .then((initialCards) => {
    const section = new Section({initialCards, renderer: rendererCard}, elementsList)
    section.renderer();
  })