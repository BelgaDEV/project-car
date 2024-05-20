let prevButton = document.getElementById('prev') // pega o button com ID PREV
let nextButton = document.getElementById('next') // pega o button com ID Next
let container = document.querySelector('.container') // pega o elemento com class .container
let items = container.querySelectorAll('.list .item') // pega todos items dentro de container com classes .list e .item
let indicator = document.querySelector('.indicators') // pega o elemento com class .indicators
let dots = indicator.querySelectorAll('ul li') // pega todos elementos dentro do elemento com classe indicator que tem ul e li
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1  // quantidade de items - 1. array sempre começa no 0.

function setSlider() {
    let itemOld = container.querySelector('.list .item.active') // vai dentro de list e que tem item active
    itemOld.classList.remove('active') // vai pegar quem esta ativo e vai remover

    let dotsOld = indicator.querySelector('ul li.active') // procura dentro do elemento indicator uma ul que tem li com classe active
    dotsOld.classList.remove('active') // e remova a classe active
    dots[active].classList.add('active') // adiciona o active

    indicator.querySelector('.number').innerText = '0' + (active + 1) // adicona mais 1 a soma
}

nextButton.onclick = () => {  // quando o botão for clicado
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1 // if e else
    setSlider()
    items[active].classList.add('active') // adicionando ao proximo elemento
}

prevButton.onclick = () => { // quando o botão for clicado
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1 // if e else
    setSlider()
    items[active].classList.add('active') // adicionando ao proximo elemento
}
