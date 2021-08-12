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


// sevices slider

const tabs = document.querySelectorAll(".services-switcher__btn");
const tabsContent = document.querySelectorAll(".services-description__item");
const tabsParent = document.querySelector(".services-switcher__list");

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.remove("services-description__item--current");
  });

  tabs.forEach((item) => {
    item.classList.remove("services-switcher__btn--current");
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add("services-description__item--current");
  tabs[i].classList.add("services-switcher__btn--current");
}

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  let target = event.target;

  if (target && target.classList.contains("services-switcher__btn")) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
