let body = document.querySelector('.main__body');

const burgerMenu = () => {
  const burger = document.querySelector('.burger-icon');
  const menu = document.querySelector('.burger-menu');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    body.classList.toggle('active');
  })
}

const cursorHandler = () => {
  const cursor = document.getElementById('cursor');
  const cards = document.querySelectorAll('.event-card');

  const handleMouseEnter = () => {
    cursor.classList.add('active-cursor');
  };

  const handleMouseLeave = () => {
    cursor.classList.remove('active-cursor');
  };

  const handleMouseMove = (e) => {
    let mouseX = e.pageX;
    let mouseY = e.pageY;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  };

  cards.forEach(card => {
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  })

  document.addEventListener('mousemove', handleMouseMove);
};

if (body.id === 'home-page') {
  cursorHandler();
}

burgerMenu(); 