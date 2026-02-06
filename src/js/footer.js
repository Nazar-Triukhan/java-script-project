document.addEventListener('DOMContentLoaded', () => {
  const inputRef = document.querySelector('.footer__input');
  const btnRef = document.querySelector('.footer__btn');
  const backdropRef = document.querySelector('.footer__backdrop');
  const btnCloseRef = document.querySelector('.footer__modal-close');

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

  backdropRef.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  });

  btnCloseRef.addEventListener('click', closeModal);

  function openModal() {
    backdropRef.classList.remove('is__close');
    inputRef.value = '';
  }

  function closeModal() {
    backdropRef.classList.add('is__close');
  }
});
