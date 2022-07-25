const menu = document.querySelector('.nav-btn')
const navbar = document.querySelector('.nav-links')
menu.addEventListener('click', () => {
  navbar.classList.toggle('show-links')
})
