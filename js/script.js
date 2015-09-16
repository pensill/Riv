$(document).ready(function() {

/*select*/
  $('select').styler({
    selectSearch: true,
    selectSearchNotFound: 'Город не найден'
  });

/*slider*/
  $('.present-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow:false,
    nextArrow:false,
    arrows:false
  });

  $('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    arrows:true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }, 
    }
  ]
  });

/*mobile menu*/
  $('.hamburger__container').click(function(){
    $('.presentation-menu__list').slideToggle();
  });

  $('.main-nav-hamburger__container').click(function(){
    $('.main-nav__list').slideToggle();
  });
  
});