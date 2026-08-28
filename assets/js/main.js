const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.right = '24px';
  nav.style.top = '65px';
  nav.style.padding = '18px';
  nav.style.background = '#0b1713';
  nav.style.border = '1px solid #20342c';
  nav.style.borderRadius = '14px';
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  if (window.innerWidth <= 800) nav.style.display = 'none';
}));
