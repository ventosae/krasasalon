//WOW JS



//MAIN JS

var elem = document.querySelector('.main-carousel');
var elem1 = document.querySelector('.main-carousel1');
var elem2 = document.querySelector('.main-carousel2');
var contatctsCarousel = document.querySelector('.contacts__carousel');
var navigationMenu = document.querySelector('.navigation');
var mainPage = document.querySelector('.page-main');
var menuButton = document.querySelector('.header__toggle');
var submitButton = document.querySelector('.form__button');
var burger = document.querySelector('.hamburger');

var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  watchCSS: true,
  accessibility: false,
  imagesLoaded: false
});

var flkty1 = new Flickity( elem1, {
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  contain: true,
  watchCSS:true
});


var flkty2 = new Flickity( elem2, {
  cellAlign: 'left',
  watchCSS:true,
  contain: true,
  prevNextButtons: false,
  contain: true,
  pageDots: true
});

var flkty3 = new Flickity( contatctsCarousel, {
  cellAlign: 'left',
  contain: true,
  watchCSS: true,
  accessibility: false,
  imagesLoaded: false,
  prevNextButtons: false
});

var menuOpenHandler = function () {
  if (navigationMenu.className == "navigation navigation--closed") {
    navigationMenu.classList.remove('navigation--closed');
    mainPage.classList.add('page-main__noscroll');
    burger.classList.add('is-active');
  } else if (navigationMenu.className == "navigation") {
    navigationMenu.classList.add('navigation--closed');
    mainPage.classList.remove('page-main__noscroll');
    burger.classList.remove('is-active');
  }
};

var formsValidHandler = function () {
  var formsInputs = document.querySelector('.form').getElementsByTagName('input');
  var inputsArray = Array.from(formsInputs)
  inputsArray.push(document.querySelector(".form__filed--message"));
  inputsArray.forEach(function (e) {
      if (e.validity.valid === false) {
        e.style.boxShadow = "rgb(255, 101, 71) 0px 0px 2px 2px";
      } else if (e.validity.valid === true) {
        e.style.boxShadow = null;
      }
    })
};

if (menuButton != null) {
  menuButton.addEventListener('click', menuOpenHandler);
  };

if (submitButton != null) {
  submitButton.addEventListener('click', formsValidHandler);
  };
