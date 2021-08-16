const slides = document.querySelectorAll('.promo-slider__item');
const dots = document.querySelectorAll('.switcher__btn');
let index = 0;


// promo slider

const activeSlide = (n) => {
  for (const slide of slides) {
    slide.classList.remove('promo-slider__item--current');
  }
  slides[n].classList.add('promo-slider__item--current');
};

const activeDot = (n) => {
  for (const dot of dots) {
    dot.classList.remove('switcher__btn--current');
  }
  dots[n].classList.add('switcher__btn--current');
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    activeSlide(index);
    activeDot(index);
  });
});


// sevices slider

const tabs = document.querySelectorAll('.services-switcher__btn');
const tabsContent = document.querySelectorAll('.services-description__item');
const tabsParent = document.querySelector('.services-switcher__list');

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.remove('services-description__item--current');
  });

  tabs.forEach((item) => {
    item.classList.remove('services-switcher__btn--current');
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('services-description__item--current');
  tabs[i].classList.add('services-switcher__btn--current');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
  const target = event.target;

  if (target && target.classList.contains('services-switcher__btn')) {
    tabs.forEach((item, i) => {
      if (target === item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

// modal map

const mapPopup = document.querySelector('.modal-map');
const mapClose = mapPopup.querySelector('.modal__close');
const mapLink = document.querySelector('.contacts__map-link');

mapLink.addEventListener('click', (evt) => {
  evt.preventDefault(),
  mapPopup.classList.add('modal--show');
});

mapClose.addEventListener('click', (evt) => {
  evt.preventDefault(),
  mapPopup.classList.remove('modal--show');
});

window.addEventListener('keydown', (evt) => {
  evt.key=== 'Escape' && mapPopup.classList.contains('modal--show') && (evt.preventDefault(),
  mapPopup.classList.remove('modal--show'));
});

// modal feedback

const feedbackPopup = document.querySelector('.feedback');
const feedbackClose = feedbackPopup.querySelector('.modal__close');
const feedbackLink = document.querySelector('.contacts__link');
const feedbackForm = feedbackPopup.querySelector('.feedback__form');
const feedbackName = feedbackPopup.querySelector('[name=name]');
const feedbackEmail = feedbackPopup.querySelector('[name=email]');
const feedbackTextarea = feedbackPopup.querySelector('[name=message]');

let isStorageSupport = !0;
let storagename = '';
let storageemail = '';
try {
  storagename = localStorage.getItem('name'),
  storageemail = localStorage.getItem('email');
} catch (e) {
  isStorageSupport = !1;
}
feedbackLink.addEventListener('click', (e) => {
  e.preventDefault(),
  feedbackPopup.classList.add('modal--show'),
  storagename || storageemail ? (feedbackName.value = storagename,
  feedbackEmail.value = storageemail,
  feedbackTextarea.focus()) : feedbackName.focus();
}),
feedbackClose.addEventListener('click', (e) => {
  e.preventDefault(),
  feedbackPopup.classList.remove('modal--show'),
  feedbackPopup.classList.remove('modal--error');
}),

feedbackForm.addEventListener('submit', (e) => {
  feedbackName.value && feedbackEmail.value && feedbackTextarea.value ? isStorageSupport && (localStorage.setItem('name', feedbackName.value),
  localStorage.setItem('email', feedbackEmail.value)) : (e.preventDefault(),
  feedbackPopup.classList.remove('modal--error'),
  // eslint-disable-next-line no-self-assign
  feedbackPopup.offsetWidth = feedbackPopup.offsetWidth,
  feedbackPopup.classList.add('modal--error'));
});

feedbackLink .addEventListener('click', (evt) => {
  evt.preventDefault(),
  feedbackPopup.classList.add('modal--show');
});

feedbackClose.addEventListener('click', (evt) => {
  evt.preventDefault(),
  feedbackPopup.classList.remove('modal--show');
});

window.addEventListener('keydown', (evt) => {
  evt.key=== 'Escape' && feedbackPopup.classList.contains('modal--show') && (evt.preventDefault(),
  feedbackPopup.classList.remove('modal--show'));
});
