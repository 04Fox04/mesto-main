export default class Card {
    constructor(name, link, templateSelector, openZoomImage){
        this._name = name;
        this._link = link;
        this._cardsTemplate = templateSelector; 
        this._openZoomImage = openZoomImage;
    }
    _getTamplate() {
        this._cardElement = this._cardsTemplate.querySelector('.elements__item').cloneNode(true);
        return this._cardElement;
    }
    generateCard() {
        this._element = this._getTamplate();
        this._elementZoomImage = this._element.querySelector('.elements__image');
        this._elementZoomImage.src = this._link;
        this._elementZoomImage.alt = this._name;
        this._element.querySelector('.elements__title').textContent = this._name;
        this._setEventListeners();
        return this._element;
    }
    _setEventListeners() {
        this._element.querySelector('.elements__like').addEventListener('click', (evt) => {
          evt.target.classList.toggle('elements__like-active');
        });
        this._element.querySelector('.elements__delete').addEventListener('click', () => {
          this._element.remove();
          this._element = null;
        })
        this._elementZoomImage.addEventListener('click', () => {
          this._openZoomImage(this._name, this._link);
        });
    }
}