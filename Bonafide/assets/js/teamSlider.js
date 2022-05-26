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