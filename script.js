// ex 5
// No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.
// Criando lo para ex 4
const taskList = document.getElementById('lista-tarefas');

// Pegando o main do DOM
const mainProject = document.getElementById('main');

// pegar botão
const button = document.getElementById('criar-tarefa');
// Criar uma função que adiciona um elemento na tela

// Função que limpa input - Será usada na sunção inputTask
function clearInput(input) {
  if (input.value !== '') {
    input.value = '';
  }
}
// Criando função que altera o bacckgroud.
function changeBackground(event) {
  let listSelected = document.getElementsByClassName('selected');
  for (let index = 0; index < listSelected.length; index += 1) {
      listSelected[index].classList.remove('selected');
  }
  event.target.className = 'selected';
}

function throughLine(event) {
  console.log('foi');
}
// Função para colocar input na lista
function inputTask() {
  // pegar o valor do input no dom
  const inputValue = document.getElementById('texto-tarefa').value;
  // depois criamos o elemento que irá ser cada iten da lista, a tag li
  const itenList = document.createElement('li');
  // adicionando id nas li
  itenList.id = 'itenList';
  // adicionando escutador
  itenList.addEventListener('click', changeBackground);
  // Adicionando dbclick como evento para riscar linha
  itenList.addEventListener('dblclick', throughLine);
  // Agora precisamos adicionar o conteudo do input na tag li
  itenList.innerText = inputValue;
  // Agora é necessario vincular a li na tag ol
  taskList.appendChild(itenList);
  // Adiciona a lista no main
  mainProject.appendChild(taskList);
  // Limpa o input
  clearInput(document.getElementById('texto-tarefa'));
}
// Apos tudo ser transformado em uma função devemos adicionar essa função ao evento click no botão Adicionar
button.addEventListener('click', inputTask);

// Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
// criar a classe completed com a propr