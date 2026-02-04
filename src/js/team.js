const listRef = document.querySelector('.team__list')
const itemRef = document.querySelectorAll('.team__item')
const controlRiRef = document.querySelector('.team__ri')
const controlLiRef = document.querySelector('.team__le')
const lineRef = document.querySelectorAll('.team__line')

let offset = 500;
let index = 0
const step = 250

// старт
listRef.style.transform = `translateX(${offset}px)`
updateLine()

// функція оновлення активної лінії
function updateLine() {
  lineRef.forEach(line => line.classList.remove('team__active'))
  lineRef[index].classList.add('team__active')
}

// кнопка вправо
controlRiRef.addEventListener('click', () => {
  controlRiRef.classList.add('team__scale')
  index++
  offset -= step

  if(index >= itemRef.length){
    index = 0
    offset = 500
  }

  listRef.style.transform = `translateX(${offset}px)`
  updateLine()
})

// кнопка вліво
controlLiRef.addEventListener('click', () => {
  index--
  offset += step

  if(index < 0){
    index = itemRef.length - 1
    offset = 500 - step * (itemRef.length - 1)
  }

  listRef.style.transform = `translateX(${offset}px)`
  updateLine()
})

// клавіші
document.addEventListener('keydown', (event) => {
  if(event.code === 'ArrowRight'){
    index++
    offset -= step
    if(index >= itemRef.length){
      index = 0
      offset = 500
    }
    listRef.style.transform = `translateX(${offset}px)`
    updateLine()
  }
  if(event.code === 'ArrowLeft'){
    index--
    offset += step
    if(index < 0){
      index = itemRef.length - 1
      offset = 500 - step * (itemRef.length - 1)
    }
    listRef.style.transform = `translateX(${offset}px)`
    updateLine()
  }
})