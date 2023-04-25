// import Popup from './Popup.js'
// export default class PopupWithForm extends Popup{
//     constructor(popup, callbackSubmitForm){
//         super(popup);
//         this._callbackSubmitForm = callbackSubmitForm;
//         this._form = this._popup.querySelector('.popup__form');
//         this._inputList = this._popup.querySelectorAll('.popup__input');
//     }
//     _getInputValues(){
//         this._inputValues = {};
//         this._inputList.forEach((input) => {
//             this._inputValues[input.name] = input.value;
//         });
//         return this._inputValues;
//     }
//     setInputValues(item){
//         this._inputList.forEach((input) => {
//             input.value = item[input.name];
//         });
//     }
//     setEventListeners(){
//         super.setEventListeners();
//         this._form.addEventListener('submit', (evt) => {
//             evt.preventDefault();
//             this._callbackSubmitForm(this._getInputValues());
//         })
//     }
//     close(){
//         super.close();
//         this._form.reset();
//     }
// }
//===

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, callbackForm) {
    super(popup);
    this._callbackForm = callbackForm;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(item) {
    this._inputList.forEach((input) => {
      input.value = item[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callbackForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}