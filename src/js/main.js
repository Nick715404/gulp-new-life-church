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

  breakpoints: {
    490: {
      spaceBetween: 12,
    },
    768: {
      spaceBetween: 16,
      slidesPerView: "auto",
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 25
    }
  }

});

const burgerMenu = () => {
  const burger = document.querySelector('.burger-icon');
  const menu = document.querySelector('.burger-menu');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    burger.classList.add('active');
  })
}

burgerMenu();