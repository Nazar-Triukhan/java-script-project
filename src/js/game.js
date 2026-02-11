const papWinLostEl = document.querySelector('.paper_win-lost');

const papVariantEl = document.querySelector('.paper__variant-span');

const papScorePcEl = document.querySelector('.paper__score-pc');

const papScoreYouEl = document.querySelector('.paper__score-you');

const papButtonEls = document.querySelectorAll('.paper__item-btn');

const papButtonVariantEl = document.querySelector('.paper__btn');

const choices = ['Камінь', 'Ножиці', 'Папір'];

let papSymbol = null;

papButtonEls.forEach(item => {
  item.addEventListener('click', event => {
    papVariantEl.textContent = '';
    papButtonEls.forEach(eventTwo =>
      eventTwo.classList.remove('paper__item-btn-active')
    );
    event.currentTarget.classList.add('paper__item-btn-active');
    papSymbol = event.currentTarget.querySelector('.paper__img').alt;

    const pcSymbol = choices[Math.floor(Math.random() * choices.length)];

    papWinLostEl.classList.remove('black');
    papWinLostEl.classList.remove('red');
    papWinLostEl.classList.remove('green');

    switch (papSymbol) {
      case 'Камінь':
        if (pcSymbol === 'Камінь') {
          papWinLostEl.textContent = 'Нічия';
          papWinLostEl.classList.add('.black');
        }
        if (pcSymbol === 'Ножиці') {
          papWinLostEl.textContent = 'Ви виграли!';
          papWinLostEl.classList.add('green');
          papScoreYouEl.textContent = String(
            Number(papScoreYouEl.textContent) + 1
          );
        }
        if (pcSymbol === 'Папір') {
          papWinLostEl.textContent = 'Ви програли!';
          papWinLostEl.classList.add('red');
          papScorePcEl.textContent = String(
            Number(papScorePcEl.textContent) + 1
          );
        }
        break;
      case 'Ножиці':
        if (pcSymbol === 'Ножиці') {
          papWinLostEl.textContent = 'Нічия';
          papWinLostEl.classList.add('black');
        }
        if (pcSymbol === 'Папір') {
          papWinLostEl.textContent = 'Ви виграли!';
          papWinLostEl.classList.add('green');
          papScoreYouEl.textContent = String(
            Number(papScoreYouEl.textContent) + 1
          );
        }
        if (pcSymbol === 'Камінь') {
          papWinLostEl.textContent = 'Ви програли!';
          papWinLostEl.classList.add('red');
          papScorePcEl.textContent = String(
            Number(papScorePcEl.textContent) + 1
          );
        }
        break;
      case 'Папір':
        if (pcSymbol === 'Папір') {
          papWinLostEl.textContent = 'Нічия';
          papWinLostEl.classList.add('.black');
        }
        if (pcSymbol === 'Камінь') {
          papWinLostEl.textContent = 'Ви виграли!';
          papWinLostEl.classList.add('green');
          papScoreYouEl.textContent = String(
            Number(papScoreYouEl.textContent) + 1
          );
        }
        if (pcSymbol === 'Ножиці') {
          papWinLostEl.textContent = 'Ви програли!';
          papWinLostEl.classList.add('red');
          papScorePcEl.textContent = String(
            Number(papScorePcEl.textContent) + 1
          );
        }
        break;
    }
    papVariantEl.textContent = `${pcSymbol}`;
  });
});

papButtonVariantEl.addEventListener('click', () => {
  const pcSymbol = choices[Math.floor(Math.random() * choices.length)];

  papVariantEl.textContent = `${pcSymbol}`;
});
