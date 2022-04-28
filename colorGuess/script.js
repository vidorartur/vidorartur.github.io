window.onload = function go() {
  colorGenerator()
  clickOnColor()
  rgbGenerator()
  const placar = document.querySelector('#score')
  placar.innerText = 0
  const body = document.querySelector('body')
  body.style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + " ," + parseInt(Math.random() * 255) + ")";
}

function rgbGenerator() {
  const rgb = document.querySelector('#rgb-color')

  const colors = document.querySelectorAll('.ball')
  for (let i = 0; i < colors.length; i++) {
    rgb.innerText = colors[Math.floor(Math.random() * colors.length)].style.backgroundColor
  }
}

function colorGenerator() {
  const colors = document.querySelectorAll('.ball')
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + " ," + parseInt(Math.random() * 255) + ")";
  }
}

let score = 0

function clickOnColor() {
  const colors = document.querySelectorAll('.ball')
  const rgb = document.querySelector('#rgb-color')
  const resp = document.querySelector('#answer')
  const placar = document.querySelector('#score')

  for (let i = 0; i < colors.length; i++) {

    function verificaCor() {
      if (colors[i].style.backgroundColor === rgb.innerText) {
        resp.innerHTML = "Acertou!"
        score += 3
        placar.innerHTML = score
      } else {
        resp.innerHTML = "Errou! Tente novamente!"
      }
    }
    colors[i].addEventListener('click', verificaCor)
  }
}

function resetGame() {
  colorGenerator()
  clickOnColor()
  rgbGenerator()
  const resp = document.querySelector('#answer')
  resp.innerText = "Escolha uma cor"
  const body = document.querySelector('body')
  body.style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + " ," + parseInt(Math.random() * 255) + ")";
  const resetBtn = document.querySelector('#reset-game')
  resetBtn.style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + " ," + parseInt(Math.random() * 255) + ")";
  score = 0
}

const reset = document.querySelector('#reset-game')

reset.addEventListener('click', resetGame)
