function criarTarefa() {
  const text = document.querySelector('#texto-tarefa');
  const listaTarefas = document.querySelector('#lista-tarefas');
  const createLi = document.createElement('li');
  const textValue = document.createTextNode(text.value);
  if (text.value === "") {
    '#'
  } else {
    createLi.appendChild(textValue);
    listaTarefas.appendChild(createLi).classList.add('tarefas', "list-group-item");
  }
  text.value = '';
  marcarTarefa();
}

function marcarTarefa() {
  const li = document.querySelectorAll('.tarefas');

  function colorindoTarefa(event) {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
    }
    event.target.classList.add('selected');
  }

  function checked(event) {

    event.target.classList.toggle('completed')
  }

  for (i = 0; i < li.length; i++) {
    li[i].addEventListener('click', colorindoTarefa);
    li[i].addEventListener('dblclick', checked);
  }
}

function apagarTudo() {
  const lista = document.querySelector('ol');
  lista.innerHTML = '';
}

function apagarChecked(event) {
  const completed = document.querySelectorAll('.completed');

  for (i = 0; i < completed.length; i++) {
    completed[i].remove();
  }
}

function apagarSelected(event) {
  const selected = document.querySelectorAll('.selected');

  for (i = 0; i < selected.length; i++) {
    selected[i].remove();
  }
}

function saveData() {
  const tarefas = document.querySelector('#lista-tarefas');
  localStorage.setItem('Tarefas', tarefas.innerHTML);
}

function trocaCima() {
  const selected = document.querySelectorAll('.selected')
  for (i = 0; i < selected.length; i++) {
    let previous = selected[i].previousElementSibling
    previous.replaceWith(selected[i])
    selected[i].insertAdjacentElement('afterend', previous)
  }
}

function trocaBaixo() {
  const selected = document.querySelectorAll('.selected');
  for (i = 0; i < selected.length; i++) {
    let next = selected[i].nextElementSibling;
    next.replaceWith(selected[i]);
    selected[i].insertAdjacentElement('beforebegin', next);
  }
}

window.onload = function go() {
  const lista = document.querySelector('ol');
  const recoveredObject = localStorage.getItem('Tarefas');
  lista.innerHTML = recoveredObject;
  marcarTarefa();
}

const buttonAdd = document.querySelector('#criar-tarefa');
const buttonRemove = document.querySelector('#apaga-tudo');
const buttonRemoveChecked = document.querySelector('#remover-finalizados');
const buttonSave = document.querySelector('#salvar-tarefas');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');
const buttonMoverCima = document.querySelector('#mover-cima');
const buttonMoverBaixo = document.querySelector('#mover-baixo');


buttonRemove.addEventListener('click', apagarTudo);
buttonAdd.addEventListener('click', criarTarefa);
buttonRemoveChecked.addEventListener('click', apagarChecked);
buttonSave.addEventListener('click', saveData);
buttonRemoveSelected.addEventListener('click', apagarSelected);
buttonMoverCima.addEventListener('click', trocaCima);
buttonMoverBaixo.addEventListener('click', trocaBaixo);

// ++==============+++++++++++++++++++++++==============++++++++++++++++++


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