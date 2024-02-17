const swiper = new Swiper('.sermons-swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 2,
  spaceBetween: 25,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    220: {
      spaceBetween: 12,
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      spaceBetween: 16,
      centeredSlides: false,
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 25
    }
  }

});