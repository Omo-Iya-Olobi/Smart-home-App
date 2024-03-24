// Toggle nav icon on mobile devices

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav-items');

// open nav menu

menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
});

// close nav menu

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
});

// show/hide faqs
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
    // change plus icon to minus when open
    const icon = faq.querySelector('.faq-icon i');
    if (icon.className === 'fa-solid fa-plus') {
      icon.className = 'fa-solid fa-square-minus';
    } else {
      icon.className = 'fa-solid fa-plus';
    }
  });
});

// add background style to navbar on scroll
window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('window-scroll', window.scrollY > 0);
});
