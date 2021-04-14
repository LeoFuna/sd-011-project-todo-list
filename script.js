const addListButton = document.getElementById('criar-tarefa');
const inputList = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const clearButton = document.getElementById('apaga-tudo');
const clearCompletedButton = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const removeSelectedButton = document.getElementById('remover-selecionado');

addListButton.addEventListener('click', () => {
  const elementLi = document.createElement('li');
  elementLi.innerText = inputList.value;
  orderedList.appendChild(elementLi);
  elementLi.classList.add('list');
  inputList.value = '';
});

function addBackground() {
  orderedList.addEventListener('click', (event) => {
    const selectedLi = document.querySelector('.selected');
    if (selectedLi != null) {
      document.querySelector('.selected').classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
addBackground();

function addClass(par) {
  const completedClass = par;
  completedClass.classList.add('completed');
}

function removeClass(par) {
  const removedClass = par;
  removedClass.classList.remove('completed');
}

function throughLine() {
  orderedList.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      removeClass(event.target);
    } else {
      addClass(event.target);
    }
  });
}
throughLine();

function clearList() {
  orderedList.innerHTML = '';
}
clearButton.addEventListener('click', clearList);

function clearCompleted() {
  const completedItems = document.querySelectorAll('.completed');
  for (let index = 0; index < completedItems.length; index += 1) {
    completedItems[index].remove();
  }
}
clearCompletedButton.addEventListener('click', clearCompleted);

orderedList.innerHTML = localStorage.getItem('savedList');

function saveToDoList() {
  localStorage.setItem('savedList', orderedList.innerHTML);
}
saveButton.addEventListener('click', saveToDoList);

function moveUpLi() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected.previousElementSibling !== null) {
    orderedList.insertBefore(selected, selected.previousSibling);
  }
}
moveUpButton.addEventListener('click', moveUpLi);

function moveDownLi() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected.nextElementSibling !== null) {
    orderedList.insertBefore(selected, selected.nextElementSibling.nextElementSibling);
  }
}
moveDownButton.addEventListener('click', moveDownLi);

function clearSelected() {
  const selectedItem = document.querySelector('.selected');
  selectedItem.remove();
}
removeSelectedButton.addEventListener('click', clearSelected);
