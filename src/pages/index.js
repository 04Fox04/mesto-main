import "./index.css";
import Card from "../scripts/Components/Card.js";
import Section from "../scripts/Components/Section.js";
import PopupWithForm from "../scripts/Components/PopupWithForm.js";
import PopupWithImage from "../scripts/Components/PopupWithImage.js";
import UserInfo from "../scripts/Components/UserInfo.js";
import FormValidator from "../scripts/Components/Validate.js";
import Api from "../scripts/Components/Api.js";
import PopupDelete from "../scripts/Components/PopupDelete.js";
import renderLoading from "..//scripts/utils/utils.js";
import {validationConfig,
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
  popupDeleteCard,
  buttonLoadingAddCard,
  buttonLoadingProfile} from "../scripts/utils/constants.js"

const validateEdit = new FormValidator(validationConfig, formEdit);
validateEdit.enableValidation()
const validateAdd = new FormValidator(validationConfig, formAdd);
validateAdd.enableValidation()
const validateAvatar = new FormValidator(validationConfig, formEditAvatar);
validateAvatar.enableValidation();
let userId;

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "370c2e24-51f6-42f1-a96f-2c7119c66fcc",
    "content-type": "application/json",
  },
});
const userInfo = new UserInfo({ nameUser: profileName, jobUser: profileJob, avatar: avatarProfile });

const handleFormEditProfile = (input) => {
  buttonLoadingProfile.textContent = "Сохранение...";
  api
    .getEditUser(input)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .then(() => formPopupEdit.close())
    .catch((err) => console.log(`Ошибка ${err}`))
    .finally(() => {
      renderLoading(false, popupEdit);
    });
};

const formPopupEdit = new PopupWithForm(popupEdit, handleFormEditProfile);
formPopupEdit.setEventListeners();

const handleFormEditAvatar = (link) => {
  api
    .getEditAvatar(link)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .then(() => formPopupAvatar.close())
    .catch((err) => console.log(`Ошибка ${err}`))
    .finally(() => {
      renderLoading(false, popupAvatar);
    });
};

const sectionAdd = new Section(
  {
    renderer: (data) => {
      cardsContainer.prepend(createCard(data));
    },
  },
  cardsContainer
);

Promise.all([api.getInitialUser(), api.getInitialCards()])
  .then(([infoUser, cards]) => {
    userInfo.setUserInfo(infoUser);
    userId = infoUser._id;
    cards.reverse().map((item) => sectionAdd.addItem(createCard(item, userId)));
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

const openZoomImage = (link, name) => popupImage.open(link, name);

function createCard(data) {
  const card = new Card(data.link, data.name, template, openZoomImage, handleDeleteCard, data.owner, userId, data._id, like, deleteLike, data.likes);
  const elementCreateCard = card.generateCard();
  return elementCreateCard;
}

function handleDeleteCard(id, card) {
  popupDelete.setConfirmation(() => {
    api
      .deleteCards(id)
      .then(() => {
        card.remove();
        popupDelete.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  });
  popupDelete.open();
}
function handleFormSubmitAddCard(data) {
  buttonLoadingAddCard.textContent = "Сохранение...";
  api
    .getAddCard(data)
    .then((res) => {
      sectionAdd.addItem(createCard(res, res.owner._id));
    })
    .then(() => popupAdd.close())
    .catch((err) => console.log(`Ошибка ${err}`))
    .finally(() => {
      renderLoading(false, popupAddCard);
    });
}
function like(card, likeId) {
  api
    .addLike(likeId)
    .then((res) => {
      card.showLikes(res.likes);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
}

function deleteLike(card, likeId) {
  api
    .deleteLike(likeId)
    .then((res) => {
      card.showLikes(res.likes);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
}

buttonAddCard.addEventListener("click", () => {
  popupAdd.open();
  renderLoading(true, popupAddCard);
  validateAdd.toggleButtonState();
});

buttonInfoProfile.addEventListener("click", () => {
  formPopupEdit.open();
  renderLoading(true, popupEdit);
  formPopupEdit.setInputValues(userInfo.getUserInfo());
});

buttonEditAvatar.addEventListener("click", () => {
  formPopupAvatar.open();
  renderLoading(true, popupAvatar);
  validateAvatar.toggleButtonState();
});

const formPopupAvatar = new PopupWithForm(popupAvatar, handleFormEditAvatar);
formPopupAvatar.setEventListeners();
const popupImage = new PopupWithImage(popupWindow);
popupImage.setEventListeners();
const popupAdd = new PopupWithForm(popupAddCard, handleFormSubmitAddCard);
popupAdd.setEventListeners();
const popupDelete = new PopupDelete(popupDeleteCard);
popupDelete.setEventListeners();