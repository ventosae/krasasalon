// element argument can be a selector string
//   for an individual element

var elem = document.querySelector('.main-carousel');
var elem1 = document.querySelector('.main-carousel1');
var elem2 = document.querySelector('.main-carousel2');

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
  watchCSS:false
});


var flkty2 = new Flickity( elem2, {
  cellAlign: 'left',
  watchCSS:true,
  contain: true,
  prevNextButtons: false,
  contain: true,
  pageDots: false
});


