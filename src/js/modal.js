
const backdropEl = document.querySelector('.backdrop');
const btnCloseEl = document.querySelector('.modal-btn-close');
const modalInputEl = document.querySelector(".modal-input")
const modalBtnEl = document.querySelector(".modal-btn")
const userGreetingEl = document.querySelector(".header-user-greeting")

document.addEventListener("DOMContentLoaded", () => {
    openModal()
});

btnCloseEl.addEventListener("click", () => {
    backdropEl.classList.add("is-active");
    closeModal();
});

backdropEl.addEventListener("click", (event) => {

    console.log(event.target);
    console.log(event.currentTarget);

    if(event.target === event.currentTarget){
        backdropEl.classList.add("is-active");
        closeModal();
    };
   
});

document.addEventListener("keydown", (event) => {
    console.log(event.code);

    if(event.code === "Escape"){
        backdropEl.classList.add("is-active");
        closeModal();
    };
});






modalBtnEl.addEventListener("click", () => {
    const name = modalInputEl.value.trim();

    if (name !== "") {
        userGreetingEl.textContent = `Вітаємо, ${name}!`
        closeModal();
    }
    else {
        closeModal();
    }
});





function closeModal(){
    backdropEl.classList.add("is-active");
};

function openModal(){
    backdropEl.classList.remove("is-active");
};

