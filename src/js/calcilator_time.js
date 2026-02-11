const inputEl = document.querySelector(".time__input")
const buttonEl = document.querySelector(".time__button")
const descEl = document.querySelector(".time__description")

buttonEl.addEventListener("click", (event) => {
const totalSeconds = Number(inputEl.value)
const totalMinutes = Math.floor(totalSeconds / 60)
const seconds = totalSeconds % 60
const numberHours = totalMinutes / 60;
const days = Math.floor(numberHours / 24);
const hours = Math.floor(numberHours % 24);
const minutes = totalMinutes % 60;
const modSeconds = String(seconds).padStart(2,0);
const modMinutes = String(minutes).padStart(2,0);
const modHours = String(hours).padStart(2,0);
descEl.textContent = `${days} дн.${modHours}:${modMinutes}:${modSeconds}`
})