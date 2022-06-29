window.addEventListener('load', () => {
    const loader = document.querySelector('.preloader');
    const loaderImage = document.querySelector('.preloader__image');

    loaderImage.style.animation = 'loader 2s linear forwards';
    setTimeout(() => loader.style.display = "none", 2000)
})


const buttonPopup = document.querySelector('.header__menu');
const popupWindow = document.querySelector('.popup');
const body = document.body;

buttonPopup.addEventListener('click', popup);

function popup() {
    buttonPopup.classList.toggle('active');
    popupWindow.classList.toggle('active');
    body.classList.toggle('active');
}

const linkPopupList = document.querySelectorAll('.popup__link');

linkPopupList.forEach(linkPopup => linkPopup.addEventListener('click', linkPopupActive));

function linkPopupActive(e) {
    e.target.classList.toggle('active');
}

