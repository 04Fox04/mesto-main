import Popup from './popup.js'
export default class PopupWithImage extends Popup{
    constructor(popup){
        super(popup);
        this._generateCard = this._popup.querySelector('.popup__window-image');
        this._popupImageText = this._popup.querySelector('.popup__zoom-title');
    }
    open(name, link){
        super.open();
        this._generateCard.alt = name;
        this._generateCard.src = link;
        this._popupImageText.textContent = name;
    }
}