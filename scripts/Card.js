export { Card, initialCards };
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

class Card {
    constructor(name, link, templateSelector, openZoomImage){
        this.name = name;
        this.link = link;
        this._cardsTemplate = templateSelector; 
        this._openZoomImage = openZoomImage;
    }

    _getTamplate() {
        this._cardElement = this._cardsTemplate.cloneNode(true);
        return this._cardElement;
    }
    generateCard() {
      this._element = this._getTamplate();
      this._elementZoomImage = this._element.querySelector('.elements__image');
      this._elementZoomImage.src = this.link;
      this._elementZoomImage.alt = this.name;
      this._element.querySelector('.elements__title').textContent = this.name;
      this._setEventListeners();

      return this._element;
    }
    _setEventListeners() {
      this._element.querySelector('.elements__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('elements__like-active');
      });
      this._element.querySelector('.elements__delete').addEventListener('click', () => {
        this._element.remove();
      });
      // this._element.querySelector('.elements__image').addEventListener('click', () => {
      //   this.openZoomImage();
      // });
    }
}
export default Card; 