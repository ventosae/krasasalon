var elem=document.querySelector(".main-carousel"),elem1=document.querySelector(".main-carousel1"),elem2=document.querySelector(".main-carousel2"),contatctsCarousel=document.querySelector(".contacts__carousel"),navigationMenu=document.querySelector(".navigation"),mainPage=document.querySelector(".page-main"),menuButton=document.querySelector(".header__toggle"),submitButton=document.querySelector(".form__button"),burger=document.querySelector(".hamburger"),flkty=new Flickity(elem,{cellAlign:"left",contain:!0,watchCSS:!0,accessibility:!1,imagesLoaded:!1}),flkty1=new Flickity(elem1,{cellAlign:"left",contain:!0,prevNextButtons:!1,contain:!0,watchCSS:!0}),flkty2=new Flickity(elem2,{cellAlign:"left",watchCSS:!0,contain:!0,prevNextButtons:!1,contain:!0,pageDots:!0}),flkty3=new Flickity(contatctsCarousel,{cellAlign:"left",contain:!0,watchCSS:!0,accessibility:!1,imagesLoaded:!1,prevNextButtons:!1}),menuOpenHandler=function(){"navigation navigation--closed"==navigationMenu.className?(navigationMenu.classList.remove("navigation--closed"),mainPage.classList.add("page-main__noscroll"),burger.classList.add("is-active")):"navigation"==navigationMenu.className&&(navigationMenu.classList.add("navigation--closed"),mainPage.classList.remove("page-main__noscroll"),burger.classList.remove("is-active"))},formsValidHandler=function(){var e=document.querySelector(".form").getElementsByTagName("input"),t=Array.from(e);t.push(document.querySelector(".form__filed--message")),t.forEach(function(e){!1===e.validity.valid?e.style.boxShadow="rgb(255, 101, 71) 0px 0px 2px 2px":!0===e.validity.valid&&(e.style.boxShadow=null)})};null!=menuButton&&menuButton.addEventListener("click",menuOpenHandler),null!=submitButton&&submitButton.addEventListener("click",formsValidHandler);