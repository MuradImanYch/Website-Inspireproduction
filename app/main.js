// burger-menu

let body = document.body;
const buttonForOpenBurger = document.querySelector("#openButton");
const buttonForCloseBurger = document.querySelector("#closeButton");
const popupMenu = document.querySelector("#menuPopup");
const menu = document.querySelector(".menu__list");
const menuAround = document.querySelector(".header__container");
const header = document.querySelector(".header");
const form = document.querySelector("#form");
const videoGallery = document.querySelector(".projects__galerry");
const popup = document.querySelector(".video-popup");
const videoContent = document.querySelector(".content");

buttonForOpenBurger.addEventListener("click", openBurgerMenu);
buttonForCloseBurger.addEventListener("click", closeBurgerMenu);
menu.addEventListener("mouseleave", closeOnClick);

// События закрытия бугрера
header.addEventListener("click", (e) => closeBurgerMenu(e));
menu.addEventListener("click", (e) => e.stopPropagation());
popup.addEventListener("click", (evt) => {
  closeVideoPopup();
});
form.addEventListener("submit", (e) => null, { once: true });

function openVideoPopup(src) {
  popup.classList.add("video-opened");
  // videoContent.innerHTML = `<iframe class="content__video" src="#${src}" frameborder="0"></iframe>`;
}

function closeVideoPopup() {
  videoContent.innerHTML = "";

  popup.classList.remove("video-opened");
}

videoGallery.addEventListener("click", (evt) => {
  console.log(evt.target);
  if (evt.target.dataset.video === "1") {
    popup.classList.add("video-opened");
    // openVideoPopup("https://www.youtube.com/embed/caFEioZRF4E")
    videoContent.innerHTML = `
        <button class="closeVideoPA"><img src="images/closeBurgerMenu.png" alt="close"></button>
    <iframe class="content__video"  
src="https://www.youtube.com/embed/Ng_NQsi9Ztw?autoplay=1&color=white"
frameborder="0" allowfullscreen></iframe>`;
  } else if (evt.target.dataset.video === "2") {
    popup.classList.add("video-opened");

    videoContent.innerHTML = `
    <button class="closeVideoPA"><img src="images/closeBurgerMenu.png" alt="close"></button>
    <iframe  class="content__video" src="https://www.youtube.com/embed/JPy8CG9ejcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  } else if (evt.target.dataset.video === "3") {
    popup.classList.add("video-opened");

    videoContent.innerHTML = `
    <button class="closeVideoPA"><img src="images/closeBurgerMenu.png" alt="close"></button>
    <iframe  class="content__video" src="https://www.youtube.com/embed/o5PHN1RCSb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  }
});

// open burger

//

function openBurgerMenu(e) {
  e.stopPropagation();
  e.preventDefault();

  buttonForOpenBurger.classList.toggle("unvisib");
  popupMenu.classList.add("open");
  buttonForCloseBurger.classList.toggle("active");
  body.classList.add("noscroll");
}

// close burger menu
function closeBurgerMenu(e) {
  e.preventDefault();
  buttonForOpenBurger.classList.remove("unvisib");
  popupMenu.classList.remove("open");
  buttonForCloseBurger.classList.toggle("active");
  body.classList.remove("noscroll");
}

// по клику  включаекм скрол и тоглим классы

function renderPopup() {
  popupMenu.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popupMenu.classList.remove("open");
  buttonForCloseBurger.classList.remove("active");
  body.classList.remove("noscroll");
  buttonForOpenBurger.classList.remove("unvisib");
}
//burger-menu end

// -------------------------------

// order form
const orderButton1 = document.querySelector("#orderButton1");
const orderButton2 = document.querySelector("#orderButton2");
// const form = document.querySelector("#form");
const formContainer = document.querySelector(".form-conteiner");
// const form = document.querySelector("#form");
const closeFormButton = document.querySelector("#buttonCloseModal");
const sendOrderToBot = document.querySelector("#form-button-1");

// sendOrderToBot.addEventListener("click", () => closeOrderForm());\
form.addEventListener("submit", closeOrderForm);

orderButton1.addEventListener("click", openOrderPopup);

orderButton2.addEventListener("click", openOrderPopup1);

closeFormButton.addEventListener("click", closeOrderForm);
formContainer.addEventListener("click", closModalForm);

function openOrderPopup(e) {
  form.classList.toggle("popupOrderVisibal");
}
function openOrderPopup1(e) {
  form.classList.toggle("popupOrderVisibal");
  setTimeout(removeScrol), 1;
}
function removeScrol() {
  body.classList.toggle("noscroll");
}
function closeOrderForm(e) {
  form.classList.remove("popupOrderVisibal");

  body.classList.remove("noscroll");
}

// функция отрисовки уведомления об отправке
function renameHeadForm(e) {
  const formHeader = document.querySelector(".heading-h3");
  formHeader.innerHTML = `Заявка принята`;
}
sendOrderToBot.addEventListener("click", renameHeadForm);
// закрытие модалки по клику на родителя
function closModalForm(e) {
  if (e.target === formContainer) {
    closeOrderForm();
  }
}

const video = document.querySelector("video");
const playButton = document.querySelector("body");

function handleUserAction() {
  if (video.paused) {
    video.play();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", handleUserAction);
  document.addEventListener("scroll", handleUserAction);
});

// Загружаем видео автоматически при загрузке страницы
setTimeout((video.autoplay = true), 0);

video.load();

document.querySelector('body.production .header__top div:first-child').addEventListener('mouseenter', () => {
  document.querySelector('body.production .editImg').style.display = 'block';
  document.querySelector('body.production .editText').style.display = 'none';
  document.querySelector('body.production .productionText').style.display = 'block';
  document.querySelector('body.production .productionImg').style.display = 'none';
});

document.querySelector('body.production .header__top div:first-child').addEventListener('mouseleave', () => {
  document.querySelector('body.production .editImg').style.display = 'none';
  document.querySelector('body.production .editText').style.display = 'block';
  document.querySelector('body.production .productionText').style.display = 'none';
  document.querySelector('body.production .productionImg').style.display = 'block';
});

document.querySelector('body.production .header__top div:nth-child(3)').addEventListener('mouseenter', () => {
  document.querySelector('body.production .creationImg').style.display = 'block';
  document.querySelector('body.production .creationText').style.display = 'none';
  document.querySelector('body.production .productionText').style.display = 'block';
  document.querySelector('body.production .productionImg').style.display = 'none';
});

document.querySelector('body.production .header__top div:nth-child(3)').addEventListener('mouseleave', () => {
  document.querySelector('body.production .creationImg').style.display = 'none';
  document.querySelector('body.production .creationText').style.display = 'block';
  document.querySelector('body.production .productionText').style.display = 'none';
  document.querySelector('body.production .productionImg').style.display = 'block';
});