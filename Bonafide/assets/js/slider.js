// Partner Slider


$('.partners-slider').slick({
  prevArrow: '<div class="partners-slider-left"> <i class="fas fa-chevron-left left"></i> </div>',
  nextArrow: '<div class="partners-slider-right"> <i class="fas fa-chevron-right right"></i> </div>',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
  
  ]
});











