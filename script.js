function navfixed(event) {
    const nav = document.querySelector('.lista-ul')


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

const buttonHam = document.querySelector('#ham-bar')
const buttonX = document.querySelector('#butn-X')
const hidden = document.querySelector('.hiddenBar')

buttonX.addEventListener('click', closeBar)
buttonHam.addEventListener('click', hiddenBar)
hidden.addEventListener('mouseleave', closeBar)


window.addEventListener('wheel', navfixed);