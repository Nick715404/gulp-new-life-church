@@include('./libs/swiper-bundle.min.js');

const swiper = new Swiper('.sermons-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,
  spaceBetween: 25,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});