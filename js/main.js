$(document).ready(function(){
    'use strict';
  $('.owl-carousel').owlCarousel({
    
    loop: true,
    items:1,
    smartSpeed:450,
});
    
 
$('.menu a').click(function(e) {
  e.preventDefault();
  var slide = $(this).data('slide');
  $('.owl-carousel').trigger('to.owl.carousel', slide);
    
$('.menu a.active').removeClass('active');
  
  // Add active class to clicked anchor
  $(this).addClass('active');
});
    
    
});