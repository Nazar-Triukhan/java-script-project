const textEl = document.querySelector('.year-text');
const buttonEl = document.querySelector('.year-btn');
const spanEl = document.querySelector('.year-span');

buttonEl.addEventListener("click", () => {
    if (textEl.value % 4 === 0 && textEl.value % 100 !== 0 || textEl.value % 400 === 0) {
        spanEl.textContent = "Ви народилися у високосний рік!";
        spanEl.style.color = "#039900";
    }
    else {
        spanEl.textContent = "Ви народилися не у високосний рік!";
        spanEl.style.color = "#990000";
    }
});