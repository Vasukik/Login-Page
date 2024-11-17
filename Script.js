const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Ensure elements exist before adding listeners
if (registerLink) {
  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
  });
}

if (loginLink) {
  loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
  });
}

if (btnPopup) {
  btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
  });
}

if (iconClose) {
  iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
  });
}
document.addEventListener('click', (event) => {
  if (!wrapper.contains(event.target) && !btnPopup.contains(event.target)) {
    wrapper.classList.remove('active-popup');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    wrapper.classList.remove('active-popup');
  }
});






