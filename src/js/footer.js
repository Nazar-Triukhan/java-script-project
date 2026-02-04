const inputRef = document.querySelector('.footer__input');
const btnRef = document.querySelector('.footer__btn');
const backdropRef = document.querySelector('.footer__backdrop');
const btnCloseRef = document.querySelector('.footer__modal-close');
const formRef = document.querySelector('.footer__form');

// кнопка
btnRef.addEventListener('click', e => {
  e.preventDefault();

  const emailText = inputRef.value.trim();

  if (
    emailText === '' ||
    !emailText.includes('@gmail.com') ||
    emailText.length <= 10
  ) {
    alert('неправильно введений ваш email');
    return;
  }

  openModal();
});

// клік по фону
backdropRef.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});

// Escape
document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeModal();
  }
});

// кнопка ✖
btnCloseRef.addEventListener('click', closeModal);

// функції
function openModal() {
  backdropRef.classList.remove('is__close');
  inputRef.value = '';
}

function closeModal() {
  backdropRef.classList.add('is__close');
}
