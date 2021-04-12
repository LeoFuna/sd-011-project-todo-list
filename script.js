const liItens = document.getElementsByTagName('li');

// Create li element
function createAndAddLiItem() {
  const orderedList = document.getElementById('lista-tarefas');
  const createLi = document.createElement('li');
  const inputText = document.getElementById('texto-tarefa');
  const text = inputText.value;
  createLi.innerText = text;
  orderedList.appendChild(createLi);
  inputText.value = '';
  createLiEventListener();
}

// Add selected class to Li
function selectedItem(event) {
  for (let index = 0; index < liItens.length; index += 1) {
    liItens[index] = liItens[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function crossedItem(event) {
  if(event.target.className != '' && event.target.className != 'selected') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }  
}

function createLiEventListener() {
  for (let index = 0; index < liItens.length; index += 1) {
    liItens[index].addEventListener('click', selectedItem);
    liItens[index].addEventListener('dblclick', crossedItem);
  }
}

function createEventlisteners() {
  const createActivity = document.getElementById('criar-tarefa');
  createActivity.addEventListener('click', createAndAddLiItem);
}

function init() {
  createEventlisteners();
}

window.onload = init;
