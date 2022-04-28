const black = document.querySelector('#black');
const steelBlue = document.querySelector('#steel-blue');
const keyLime = document.querySelector('#key-lime');
const orchidPink = document.querySelector('#orchid-pink');




function trocaClasseSteelBlue() {
  steelBlue.classList.add('selected');
  black.classList.remove('selected');
  keyLime.classList.remove('selected');
  orchidPink.classList.remove('selected');
}

function trocaClasseBlack() {
  steelBlue.classList.remove('selected');
  black.classList.add('selected');
  keyLime.classList.remove('selected');
  orchidPink.classList.remove('selected');
}

function trocaClasseKeyLime() {
  steelBlue.classList.remove('selected');
  black.classList.remove('selected');
  keyLime.classList.add('selected');
  orchidPink.classList.remove('selected');
}

function trocaClasseOrchidPink() {
  steelBlue.classList.remove('selected');
  black.classList.remove('selected');
  keyLime.classList.remove('selected');
  orchidPink.classList.add('selected');
}

steelBlue.addEventListener('click', trocaClasseSteelBlue);
orchidPink.addEventListener('click', trocaClasseOrchidPink);
keyLime.addEventListener('click', trocaClasseKeyLime);
black.addEventListener('click', trocaClasseBlack);

function pintaPixel() {
  const pixels = document.querySelectorAll('.pixel');

  function trocaCor(event) {
    const selecionado = document.querySelector('.selected');
    // funcionamento de como pegar o CSS do elemento : https://www.youtube.com/watch?v=AKMUpyQSln4
    // e como pegar o valor do CSS: https://www.youtube.com/watch?v=3vBP0H7PH9E
    const corSelecionado = window.getComputedStyle(selecionado).getPropertyValue('background-color');
    event.target.style.backgroundColor = corSelecionado;
  }
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', trocaCor);
  }
}

function limpaPixel() {
  const pintaDeBranco = document.querySelectorAll('.pixel');
  for (let i = 0; i < pintaDeBranco.length; i += 1) {
    pintaDeBranco[i].style.backgroundColor = 'white';
  }
}

const limpa = document.querySelector('#clear-board');
limpa.addEventListener('click', limpaPixel);
const reset = document.querySelector('#reset-board');
reset.addEventListener('click', colorGenerator);



function colorGenerator() {
  const colors = document.querySelectorAll('.color-random')
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + "," +  parseInt(Math.random() * 255) + " ," +  parseInt(Math.random() * 255) + ")";
  }
}

window.onload = function start() {
  black.classList.add('selected');
  pintaPixel();
  colorGenerator()
};
