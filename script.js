const buttom = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');

function addList() {
  buttom.addEventListener('click', () => {
    lista.appendChild(document.createElement('li')).innerHTML = input.value;
    input.value = '';
  });
}

function backGroundGray() {
  lista.addEventListener('click', (event) => {
    const click = event.target;
    const li = document.getElementsByTagName('li');
    for (let index = 0; index < li.length; index += 1) {
      li[index].classList.remove('gray');
      click.classList.add('gray');
      }
    });
  }

function completedList() {
  lista.addEventListener('dblclick', (event) => {
    const dbclick = event.target;
    if (dbclick.classList.contains('completed')) {
      dbclick.classList.remove('completed')
    } else {
      dbclick.classList.remove('gray')
      dbclick.classList.add('completed');
    }
  })
}

completedList();
backGroundGray();
addList();
