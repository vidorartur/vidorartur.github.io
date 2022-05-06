function navfixed(event) {
    const nav = document.querySelector('.nav-list')


    if (event.deltaY < 0) {
        nav.style.visibility = "visible";
    } else if (event.deltaY > 0) {
        nav.style.visibility = "hidden";
    }
}

function hiddenBar() {
    const hidden = document.querySelector('.hiddenBar')
    hidden.style.visibility = 'visible'
}

function closeBar() {
    const hidden = document.querySelector('.hiddenBar')
    hidden.style.visibility = 'hidden'
}

const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea')

function contador(element){
    const valorAtual = element.target.value.length;
    counter.innerText = 500 - valorAtual;
}

const buttonHam = document.querySelector('#ham-bar')
const buttonX = document.querySelector('#butn-X')
const hidden = document.querySelector('.hiddenBar')
textarea.addEventListener('input', contador);
buttonX.addEventListener('click', closeBar)
buttonHam.addEventListener('click', hiddenBar)
hidden.addEventListener('mouseleave', closeBar)


window.addEventListener('wheel', navfixed);