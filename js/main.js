$(document).ready(function(){
    'use strict';
  $('.owl-carousel').owlCarousel({
    
    loop: true,
    items:1,
    smartSpeed:450,
});
    
 
$('.owl-carousel').on('changed.owl.carousel', function(event) {
  var currentSlide = event.item.index;
  $('.menu a.active').removeClass('active');
  $('.menu a[data-slide="' + currentSlide + '"]').addClass('active');
});

$('.menu a').click(function(e) {
  e.preventDefault();
  var slide = $(this).data('slide');
  $('.owl-carousel').trigger('to.owl.carousel', slide);
});
    
    
});