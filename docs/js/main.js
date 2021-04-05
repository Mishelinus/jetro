$(function(){
$('.slider__for').slick({
  // lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
  // dots: false,
  // infinite: true,
  // speed: 500,
  fade: false,
  // cssEase: 'linear',
  asNavFor: '.slider__nav',
  // respondTo:'window',
});
$('.slider__nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  focusOnSelect: true,
  asNavFor: '.slider__for',
  dots: false,
  arrows: false,
  
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
});


$('.burger__menu').on('click', function(){
  $('.header__nav ul').slideToggle();
});

});
