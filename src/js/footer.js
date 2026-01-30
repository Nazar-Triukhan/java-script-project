const inputRef = document.querySelector('.footer__input');
const btnRef = document.querySelector('.footer__btn');
const backdropRef = document.querySelector('.footer__backdrop');
const btnCloseRef = document.querySelector('.footer__modal-close')
const formRef = document.querySelector('.footer__form')


btnRef.addEventListener('click', (e) => {
    e.preventDefault()
if (inputRef.value.trim() !== '') {
openModal();
}
});


backdropRef.addEventListener('click',(event) => {
        if(event.target === event.currentTarget){
                closeModal()
        }
})

document.addEventListener('keydown',(event)=> {
    if(event.code === 'Escape' ){
               closeModal()
    }
    
})

btnCloseRef.addEventListener('click',() => {
    closeModal()
})


function openModal() {
backdropRef.classList.remove('is__close');
inputRef.value = ''
}


function closeModal() {
backdropRef.classList.add('is__close');
// inputRef.value = ''
}


