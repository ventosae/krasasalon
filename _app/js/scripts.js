var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

var elem = document.querySelector('.main-carousel1');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel1', {
  // options
});
