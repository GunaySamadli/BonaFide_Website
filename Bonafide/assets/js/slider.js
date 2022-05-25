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
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



//Team slider
const leftArrow = document.querySelector(".team-slider-right")
const rightArrow = document.querySelector(".team-slider-left")
const slides = Array.from(document.querySelectorAll(".team-slider-item"))

rightArrow.onclick = function () {
  const currentActive = document.querySelector(' .team-slider-item.active');
  if (currentActive == slides[slides.length - 1]) {
    currentActive.classList.remove('active');
    slides[0].classList.add('active');

  } else {
    currentActive.classList.remove('active');
    currentActive.nextElementSibling.classList.add('active');
  }

}

leftArrow.onclick = function () {
  const currentActive = document.querySelector(' .team-slider-item.active');
  if (currentActive == slides[0]) {
    currentActive.classList.remove('active');
    slides[slides.length - 1].classList.add('active');

  } else {
    currentActive.classList.remove('active');
    currentActive.previousElementSibling.classList.add('active');
  }
}







