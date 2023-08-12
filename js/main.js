$(document).ready(function(){
    'use strict';
  $('.owl-carousel').owlCarousel({
    
    loop: true,
    items:1,
    smartSpeed:450,
    dots:false,
      
});
    

$('.menu .navbar-nav .nav-item a').click(function(e) {
  e.preventDefault();
  var slide = $(this).data('slide');
  $('.owl-carousel').trigger('to.owl.carousel', slide);
    
$('.menu .navbar-nav .nav-item a.active').removeClass('active');
  
  // Add active class to clicked anchor
  $(this).addClass('active');
});
    

$('.owl-carousel').on('changed.owl.carousel', function(event) {
  var current = event.item.index;




$('.nav-item a').eq(current - 2).addClass('active').closest('.nav-item').siblings().find('a').removeClass('active');



});

 


});


