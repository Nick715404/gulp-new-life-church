// Custom Scripts
const body = document.querySelector('.main__body')

window.addEventListener('scroll', e => {
  body.style.setProperty('--scrollTop', `${window.scrollY}px`);
})

console.log(body);
;
