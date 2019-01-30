// element argument can be a selector string
//   for an individual element

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  watchCSS: true,
  accessibility: false,
  imagesLoaded: false

});

var elem1 = document.querySelector('.main-carousel1');
var flkty1 = new Flickity( elem1, {
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  contain: true,
  watchCSS:false
});

// var elem2 = document.querySelector('.main-carousel');

// var flkty2 = new Flickity( elem2, {
//   // options
//   cellAlign: 'left',
//   contain: true,
//   prevNextButtons: true,
//   contain: true,
//   watchCSS:true
// });

var elem2 = document.querySelector('.main-carousel2');
var flkty2 = new Flickity( elem2, {
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  contain: true,
  watchCSS:false
});


