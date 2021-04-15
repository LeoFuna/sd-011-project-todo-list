const ordenedList = document.querySelector('#lista-tarefas');
const buttonNewJob = document.querySelector('#criar-tarefa');
const buttonCleanList = document.querySelector('#apaga-tudo');
const buttonCleanDone = document.querySelector('#remover-finalizados');
const buttonSaveList = document.querySelector('#salvar-tarefas');
const itensList = document.querySelectorAll('.Item-List');
const buttonUpItem = document.querySelector('#mover-cima');
const buttonDownItem = document.querySelector('#mover-baixo');

// botão para criar um novo item na lista
buttonNewJob.addEventListener('click', function () {
  const newItemList = document.createElement('li');
  newItemList.className = 'Item-List';
  const textItem = document.querySelector('#texto-tarefa');
  // console.log(textItem.value);
  newItemList.innerText = textItem.value;
  ordenedList.appendChild(newItemList);
  textItem.value = '';
});

// Colocar fundo cinza em um item clicado
ordenedList.addEventListener('click', function (event) {
  const itensList = document.querySelectorAll('.clicked');
  if (event.target.classList.contains('Item-List')) {
    for (let index = 0; index < itensList.length; index += 1) {
      itensList[index].classList.remove('clicked');
    }
    event.target.classList.add('clicked');
  }
});

// Coloca um line-trough no item clicado 2x
ordenedList.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('Item-List')) {
    if (event.target.classList.contains('completed') === true) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

// Botão apagar lista
buttonCleanList.addEventListener('click', function () {
  // const itensListClear = document.querySelectorAll('.Item-List');
  for (let index = 0; index < itensList.length; index += 1) {
    itensList[index].remove();
  }
});

// botão apagar finalizados
buttonCleanDone.addEventListener('click', function () {
  // const itensListDone = document.querySelectorAll('.Item-List');
  for (let index = 0; index < itensList.length; index += 1) {
    if (itensList[index].classList.contains('completed') === true) {
      itensList[index].remove();
    }
  }
});

// Botão para salvar as tarefas
buttonSaveList.addEventListener('click', function () {
  // const saveListItens = document.querySelectorAll('.Item-List');
  for (let index = 0; index < itensList.length; index += 1) {
    console.log(itensList[index].innerText);
    localStorage.setItem('item' + index, saveListItens[index].innerText);
    console.log(itensList[index].classList.value);
    localStorage.setItem('itemClass' + index, saveListItens[index].classList.value);
  }
})

window.onload = function () {
  for (let index = 0; index < (localStorage.length / 2); index += 1) {
    let itemRecoveryText = localStorage.getItem('item' + index);
    let itemRecoveryClass = localStorage.getItem('itemClass' + index);
    let itemRecoveryAdd = document.createElement('li');
    itemRecoveryAdd.innerText = itemRecoveryText;
    itemRecoveryAdd.className = itemRecoveryClass;
    ordenedList.appendChild(itemRecoveryAdd);
    // console.log(itemRecoveryText);
    // console.log(itemRecoveryClass);
  }
};

// Botão mover-baixo
buttonDownItem.addEventListener('click', function () {
  // console.log(buttonDownItem);
  let itemClicked = document.querySelectorAll('.clicked')[0];
  let nextItemClicked = document.querySelectorAll('.clicked')[0].nextSibling;
  console.log(itemClicked);
  console.log(nextItemClicked);
  ordenedList.insertBefore(itemClicked, nextItemClicked.nextSibling);
});

// Botão mover-cima
buttonUpItem.addEventListener('click', function () {
  // console.log(buttonDownItem);
  let checkItenslist = document.getElementsByClassName('Item-List');
  console.log(checkItenslist);
  if (checkItenslist[0].classList.contains('clicked') === false) {
    let itemClicked = document.querySelectorAll('.clicked')[0];
    let nextItemClicked = document.querySelectorAll('.clicked')[0].previousSibling;
    console.log(itemClicked);
    console.log(nextItemClicked);
    ordenedList.insertBefore(itemClicked, nextItemClicked);
  }
});
