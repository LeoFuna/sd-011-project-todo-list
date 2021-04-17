// To set a new event listener, I've used the example at link below
// https://www.codegrepper.com/code-examples/javascript/Adding+an+event+listener+to+an+element+that+doesn%27t+exist+yet
// To separetaly create functions changeBackgroundColor and strikeListItem, I've used that logics
// https://dev.to/akhil_001/adding-event-listeners-to-the-future-dom-elements-using-event-bubbling-3cp1
// To store data locally, I've use the example at below link
// https://www.taniarascia.com/how-to-use-local-storage-with-javascript/

const inputField = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const addButton = document.querySelector('#criar-tarefa');
const taskForm = document.querySelector('#input-task-container');
const rootElement = document.querySelector('body');
const deleteButton = document.querySelector('#apaga-tudo');
const finishedButton = document.querySelector('#remover-finalizados');
const saveTasks = document.querySelector('#salvar-tarefas');
const completedTasks = document.querySelectorAll('.completed');

function addTask() {
  const task = inputField.value;
  if (task !== '') {
    const listItem = document.createElement('li');

    listItem.className = 'new-item';
    listItem.innerText = task;
    taskList.appendChild(listItem);

    taskForm.reset();
  } else {
    alert('Insira uma tarefa válida!');
  }
}

function changeBackgroundColor(event) {
  const clickedItem = event.target;
  const taskListChildren = taskList.children;
  const background = 'rgb(128, 128, 128)';
  const selector = 'LI';
  if (clickedItem.tagName === selector) {
    for (let index = 0; index < taskListChildren.length; index += 1) {
      taskListChildren[index].style.backgroundColor = '';
    }
    clickedItem.style.backgroundColor = background;
  }
}

function strikeListItem(event) {
  const clickedItem = event.target;
  const selector = 'LI';

  if (clickedItem.tagName === selector) {
    clickedItem.classList.toggle('completed');
  }
}

function cleanListItems() {
  localStorage.clear();
  const taskListItems = taskList.children;
  if (taskListItems.length !== 0) {
    while (taskList.firstChild) {
      taskList.firstChild.remove();
    }
  }
}

function removeFinishedItems() {
  console.log(completedTasks);
}

// function saveAll() {
//   let itemsArray = [];
//   if (taskList.children.length > 0) {
//     for (let index = 0; index < taskList.children.length; index += 1) {
//       itemsArray.push(taskList.children[index].outerHTML);
//     }
//   }
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   console.log(localStorage);
//   console.log(itemsArray);
//   console.log(taskList.children[3]);
// }

function saveAll() {
  localStorage.setItem('items', taskList.innerHTML);
}

taskList.innerHTML = localStorage.getItem('items');

rootElement.addEventListener('click', changeBackgroundColor);
rootElement.addEventListener('dblclick', strikeListItem);
addButton.addEventListener('click', addTask);
deleteButton.addEventListener('click', cleanListItems);
finishedButton.addEventListener('click', removeFinishedItems);
saveTasks.addEventListener('click', saveAll);
