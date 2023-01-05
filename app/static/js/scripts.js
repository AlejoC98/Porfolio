// sidebar function

const instance = new Typewriter('#typewriter', {
    strings: ['Programmer', 'Web Designer'],
    autoStart: true,
    loop: true,
  });

$(document).ready(function(){
  
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    responsiceClass: true,
    responsive: {
      0: {
        items: 0,
      },
      600: {
        items: 1
      },
      800: {
        items: 1
      },
      1000: {
        items: 1
      },
      1400: {
        items: 2
      },
      1440: {
        items: 2
      }
    }
});

});