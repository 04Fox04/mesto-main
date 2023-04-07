import "./index.css";
import Card from "../scripts/Components/Card.js";
import Section from "../scripts/Components/section.js";
import PopupWithForm from "../scripts/Components/popupWithForm.js";
import PopupWithImage from "../scripts/Components/popupWithImage.js";
import UserInfo from "../scripts/Components/userInfo.js";
import {FormValidator} from "../scripts/Components/validate.js";
import {initialCards, validationConfig, buttonOpenPopupProfile, popupEditProfile, popupFormEditProfile, profileName, profileJob, popupAdd, openButtonAdd, tempalate, elements, elementsList, formСreation, popupZoomImage } from "../scripts/utils/constants.js"


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
  const elementCreateCard = card.generateCard();
  return elementCreateCard;
}

const section = new Section({items: initialCards, renderer: rendererCard}, elementsList)
section.renderer();

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

