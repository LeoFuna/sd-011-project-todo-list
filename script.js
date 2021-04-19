const listTarefas = document.getElementById('lista-tarefas'); //Lista a ser criada
let criarTarefa = document.getElementById('criar-tarefa'); //BUTTON
let textoTarefa = document.getElementById('texto-tarefa'); //INPUT

// adicionando item na lista e zerando o input
function criarItem() {
    let listItem = document.createElement('li');
    let inputValue = textoTarefa.value;

    listItem.innerText = inputValue;
    listItem.className = 'listItens';
    listTarefas.appendChild(listItem);
    textoTarefa.value = '';
}

criarTarefa.addEventListener('click', criarItem)

//adicionar um item como feito em cinza
function itemSelected(event) {
  let listItem = document.querySelector('.selected');
  const selectedItem = event.target;
  if (selectedItem.className === 'listItens') {
    selectedItem.classList.add('selected');
  }
  if (listItem.className === 'listItens selected') {
    listItem.classList.remove('selected')
  }
}

listTarefas.addEventListener('click', itemSelected);



