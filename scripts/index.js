const openButton = document.querySelector('.profile__info-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__form');
const popupName = document. querySelector('.popup__input_type_name');
const popupJob = document.querySelector('.popup__input_type_job')
const profileName = document. querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-job');

// открытие/закрытие формы
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

// редактирование формы
function handleFormSubmit(evt) {
    evt.preventDefault (); 
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    handleCloseButtonClick();
}
popupForm.addEventListener('submit', handleFormSubmit); 
openButton.addEventListener('click', handleOpenButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);





