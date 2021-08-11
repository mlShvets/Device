const slides = document.querySelectorAll(".promo-slider__item");
const dots = document.querySelectorAll(".switcher__btn");

let index = 0;

// promo slider

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove("promo-slider__item--current");
  }
  slides[n].classList.add("promo-slider__item--current");
}

const activeDot = n => {
  for (dot of dots) {
    dot.classList.remove("switcher__btn--current");
  }
  dots[n].classList.add("switcher__btn--current");
}

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    activeSlide(index);
    activeDot(index);
  })
})
