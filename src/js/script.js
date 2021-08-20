const hamburger = document.querySelector('.hamburger'),
	headerNav = document.querySelector('.header__nav'),
	headerClose = document.querySelector('.header__close'),
	bodyLock = document.querySelector('body');

hamburger.addEventListener('click', () => {
	headerNav.classList.add('active');
  bodyLock.classList.add('lock');
});

headerClose.addEventListener('click', () => {
	headerNav.classList.remove('active');
  bodyLock.classList.remove('lock');
});

