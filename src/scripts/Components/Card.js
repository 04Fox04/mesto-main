export default class Card {
  constructor(link, name, templateSelector, handleCardClick, handleDeleteCard, owner, myId, id, like, deleteLike, likes) {
    this.link = link;
    this.name = name;
    this._cardsTemplate = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._owner = owner._id;
    this._myId = myId;
    this._id = id;
    this._like = like;
    this._deleteLike = deleteLike;
    this._likes = likes;
    this._number = this._likes.length;
  }

  _getTemplate() {
    this._cardElement = this._cardsTemplate.cloneNode(true);
    return this._cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._elementPhotoCard = this._element.querySelector(".elements__image");
    this._elementPhotoCard.src = this.link;
    this._elementPhotoCard.alt = this.name;
    this._element.querySelector(".elements__title").textContent = this.name;
    this._likeElement = this._element.querySelector(".elements__number-like");
    this._likeElement.textContent = this._number;
    this._setEventListeners();
    this.showLikes(this._likes);
    if (this._owner === this._myId) {
      return this._element;
    } else {
      this._element.querySelector(".elements__delete").style.display = "none";
      return this._element;
    }
  }
  deleteCard() {
    this._element.remove();
    this._element = null;
  }
  _setLikeListener() {
    if (this._likes.some((user) => user._id === this._myId)) {
      this._deleteLike(this, this._id);
    } else {
      this._like(this, this._id);
    }
  }
  showLikes(likes) {
    this._likes = likes;
    this._numberLikes = likes.length;
    this._likeElement.textContent = this._numberLikes;
    this._imageLike = this._likeButton;
    if (likes.some((user) => user._id === this._myId)) {
      this._imageLike.classList.add("elements__like-active");
    } else {
      this._imageLike.classList.remove("elements__like-active");
    }
  }
  _setEventListeners() {
    this._likeButton = this._element.querySelector(".elements__like");
    this._likeButton.addEventListener("click", () => {
      this._setLikeListener();
    });

    this._element.querySelector(".elements__delete").addEventListener("click", () => {
      this._handleDeleteCard(this._id, this._element);
    });

    this._element.querySelector(".elements__image").addEventListener("click", () => {
      this._handleCardClick(this.link, this.name);
    });
  }
}