(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r,o,i,u,c,a,l,s,f){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.link=t,this.name=n,this._cardsTemplate=r,this._handleCardClick=o,this._handleDeleteCard=i,this._owner=u._id,this._myId=c,this._id=a,this._like=l,this._deleteLike=s,this._likes=f,this._number=this._likes.length}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return this._cardElement=this._cardsTemplate.cloneNode(!0),this._cardElement}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementPhotoCard=this._element.querySelector(".elements__image"),this._elementPhotoCard.src=this.link,this._elementPhotoCard.alt=this.name,this._element.querySelector(".elements__title").textContent=this.name,this._likeElement=this._element.querySelector(".elements__number-like"),this._likeElement.textContent=this._number,this._setEventListeners(),this.showLikes(this._likes),this._owner===this._myId||(this._element.querySelector(".elements__delete").style.display="none"),this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setLikeListener",value:function(){var e=this;this._likes.some((function(t){return t._id===e._myId}))?this._deleteLike(this,this._id):this._like(this,this._id)}},{key:"showLikes",value:function(e){var t=this;this._likes=e,this._numberLikes=e.length,this._likeElement.textContent=this._numberLikes,this._imageLike=this._element.querySelector(".elements__like"),e.some((function(e){return e._id===t._myId}))?this._imageLike.classList.add("elements__like-active"):this._imageLike.classList.remove("elements__like-active")}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton=this._element.querySelector(".elements__like"),this._likeButton.addEventListener("click",(function(){e._setLikeListener()})),this._element.querySelector(".elements__delete").addEventListener("click",(function(){e._handleDeleteCard(e._id,e._element)})),this._element.querySelector(".elements__image").addEventListener("click",(function(){e._handleCardClick(e.link,e.name)}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._selectorContainer=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._selectorContainer.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function a(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}var l=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=a(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=t}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===e._popup&&e.close()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._callbackForm=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;p(h(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callbackForm(e._getInputValues())}))}},{key:"close",value:function(){p(h(u.prototype),"close",this).call(this),this._form.reset()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._generateCard=t._popup.querySelector(".popup__window-image"),t._popupImageText=t._popup.querySelector(".popup__zoom-title"),t}return t=u,(n=[{key:"open",value:function(e,t){b(S(u.prototype),"open",this).call(this),this._generateCard.src=e,this._generateCard.alt=t,this._popupImageText.textContent=t}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var E=function(){function e(t){var n=t.nameUser,r=t.jobUser,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameUser=n,this._jobUser=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameUser.textContent,about:this._jobUser.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._nameUser.textContent=t,this._jobUser.textContent=n,this._avatar.src=r}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,L(r.key),r)}}function P(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function C(e,t,n){return(t=L(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===j(t)?t:String(t)}var T=P((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"_showInputError",(function(e,t){var n=r._form.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),C(this,"_hideInputError",(function(e){var t=r._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),C(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),C(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),C(this,"toggleButtonState",(function(){r._hasInvalidInput(r._inputList)?(r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0)):(r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),C(this,"_setEventListeners",(function(){r._inputList=Array.from(r._form.querySelectorAll(r._inputSelector)),r._buttonElement=r._form.querySelector(r._submitButtonSelector),r.toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r.toggleButtonState()}))}))})),C(this,"enableValidation",(function(){r._form.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners()})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n}));function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var R=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){var e=this;return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then((function(t){return e._response(t)}))}},{key:"_response",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialUser",value:function(){var e=this;return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then((function(t){return e._response(t)}))}},{key:"getEditUser",value:function(e){var t=this;return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._response(e)}))}},{key:"getEditAvatar",value:function(e){var t=this;return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._response(e)}))}},{key:"getAddCard",value:function(e){var t=this;return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._response(e)}))}},{key:"deleteCards",value:function(e){var t=this;return fetch(this._url+"/cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return t._response(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch(this._url+"/cards/"+e+"/likes",{method:"DELETE",headers:this._headers}).then((function(e){return t._response(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch(this._url+"/cards/"+e+"/likes",{method:"PUT",headers:this._headers}).then((function(e){return t._response(e)}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function A(e,t){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},A(e,t)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"open",value:function(e,t){U(D(u.prototype),"open",this).call(this),this.card=e,this.cardId=t}},{key:"setConfirmation",value:function(e){this._confirmation=e}},{key:"setEventListeners",value:function(){var e=this;U(D(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._confirmation()}))}},{key:"close",value:function(){U(D(u.prototype),"close",this).call(this),this._form.reset()}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(l);function N(e,t){t.querySelector(".popup__save").textContent=e?"Сохранить":"Сохранение..."}var J={inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__no-submit",inputErrorClass:"popup__input_type_error",errorClass:"error__text-active"},z=document.querySelector(".profile__info-button"),F=document.querySelector(".popup-edit"),G=document.querySelector(".profile__info-name"),H=document.querySelector(".profile__info-job"),M=document.querySelector(".profile__avatar"),$=document.querySelector(".template").content.querySelector(".elements__item"),K=document.querySelector(".elements__list"),Q=document.querySelector(".popup_add"),W=document.querySelector(".profile__add-button"),X=document.querySelector(".popup-window"),Y=document.querySelector(".formAdd"),Z=document.querySelector(".formEdit"),ee=document.querySelector(".edit-avatar"),te=document.querySelector(".profile__avatar-edit"),ne=document.querySelector(".popup__form-avatar"),re=document.querySelector(".popup_delete-card"),oe=document.querySelector(".popup__edit-save"),ie=document.querySelector(".popup__add-save");function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}new T(J,Z).enableValidation();var ce=new T(J,Y);ce.enableValidation();var ae,le=new T(J,ne);le.enableValidation();var se=new R({url:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"370c2e24-51f6-42f1-a96f-2c7119c66fcc","content-type":"application/json"}}),fe=new E({nameUser:G,jobUser:H,avatar:M}),pe=new m(F,(function(e){oe.textContent="Сохранение...",se.getEditUser(e).then((function(e){fe.setUserInfo(e)})).then((function(){return pe.close()})).catch((function(e){return console.log("Ошибка ".concat(e))})).finally((function(){N(!1,F)}))}));pe.setEventListeners();var ye=new i({renderer:function(e){K.prepend(me(e))}},K);Promise.all([se.getInitialUser(),se.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ue(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];fe.setUserInfo(o),ae=o._id,i.reverse().map((function(e){return ye.addItem(me(e))}))})).catch((function(e){console.log("Ошибка: ".concat(e))}));var he=function(e,t){return Se.open(e,t)};function me(e){return new n(e.link,e.name,$,he,ve,e.owner,ae,e._id,de,be,e.likes).generateCard()}function ve(e,t){we.setConfirmation((function(){se.deleteCards(e).then((function(){t.remove(),we.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))})),we.open()}function de(e,t){se.addLike(t).then((function(t){e.showLikes(t.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}function be(e,t){se.deleteLike(t).then((function(t){e.showLikes(t.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}W.addEventListener("click",(function(){ge.open(),N(!0,Q),ce.toggleButtonState()})),z.addEventListener("click",(function(){pe.open(),N(!0,F),pe.setInputValues(fe.getUserInfo())})),te.addEventListener("click",(function(){_e.open(),N(!0,ee),le.toggleButtonState()}));var _e=new m(ee,(function(e){se.getEditAvatar(e).then((function(e){fe.setUserInfo(e)})).then((function(){return _e.close()})).catch((function(e){return console.log("Ошибка ".concat(e))})).finally((function(){N(!1,ee)}))}));_e.setEventListeners();var Se=new g(X);Se.setEventListeners();var ge=new m(Q,(function(e){ie.textContent="Сохранение...",se.getAddCard(e).then((function(e){ye.addItem(me(e,e.owner._id))})).then((function(){return ge.close()})).catch((function(e){return console.log("Ошибка ".concat(e))})).finally((function(){N(!1,Q)}))}));ge.setEventListeners();var we=new V(re);we.setEventListeners()})();