// Partner Slider

$('.partners-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<div class="partners-slider-left"> <i class="fas fa-chevron-left left"></i> </div>',
  nextArrow: '<div class="partners-slider-right"> <i class="fas fa-chevron-right right"></i> </div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
  ]
});

var filtered = false;

$('.js-filter').on('click', function () {
  if (filtered === false) {
    $('.filtering').slick('slickFilter', ':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});

// Team Slider


$('.partners-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<div class="partners-slider-left"> <i class="fas fa-chevron-left left"></i> </div>',
  nextArrow: '<div class="partners-slider-right"> <i class="fas fa-chevron-right right"></i> </div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
  ]
});

var filtered = false;

$('.js-filter').on('click', function () {
  if (filtered === false) {
    $('.filtering').slick('slickFilter', ':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});




