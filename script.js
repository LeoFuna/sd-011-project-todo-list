window.onload = function(){
  const list = document.querySelector('#lista-tarefas')
  list.innerHTML = localStorage.lista
}

const inputArea = document.getElementById('texto-tarefa')
const button = document.querySelector('#criar-tarefa')
const list = document.querySelector('#lista-tarefas')


inputArea.addEventListener('change', function(event){
  let text = event.target.value
  inputArea.value = text
})

button.addEventListener('click', function(){
  const newLi = document.createElement('li')
  newLi.innerText = inputArea.value
  list.appendChild(newLi)
  inputArea.value = ''
})

list.addEventListener('click', function(event){
  let listItem = document.querySelectorAll('li')
  for(let index = 0; index < listItem.length; index +=1){
    listItem[index].removeAttribute('id')
  }
  const li = event.target
  li.setAttribute('id', 'list-color')
})

list.addEventListener('dblclick', function(event){
  const li = event.target
  if(li.classList.contains('completed')){
    li.classList.remove('completed')
  } else{
    li.classList.add('completed')
  }
})

const buttonErase = document.querySelector('#apaga-tudo')

buttonErase.addEventListener('click', function(){
  let listItem = document.querySelectorAll('li')
  for(let index =0; index < listItem.length; index+=1){
    list.removeChild(listItem[index])
  }
})

const buttonRemoveDone = document.querySelector('#remover-finalizados')

buttonRemoveDone.addEventListener('click', function(){
  let listItem = document.querySelectorAll('li')
  for(let index =0; index < listItem.length; index+=1){
    if(listItem[index].classList.contains('completed')){
      list.removeChild(listItem[index])
    }
  } 
})

const buttonSave = document.querySelector('#salvar-tarefas')

buttonSave.addEventListener('click', function(){
  localStorage.setItem('lista', list.innerHTML)
})

const buttonRemoveSelected = document.querySelector('#remover-selecionado')

buttonRemoveSelected.addEventListener('click', function(){
  let listItem = document.querySelectorAll('li')
  for(let index =0; index < listItem.length; index+=1){
    if(listItem[index].id === 'list-color'){
      list.removeChild(listItem[index])
    }
  }
})


// const buttonUp = document.querySelector('#mover-cima')

// buttonUp.addEventListener('click', function(){
//   const li = document.querySelectorAll('li')
//   for(let index = 0; index < li.length; index += 1){
//     if(li[index].id === 'list-color' && index !==0){
//       let teste = li[index].innerHTML
//       let teste2 = li[index -1].innerHTML
      
//       li[index].innerHTML = teste2
//       li[index - 1].innerHTML = teste
//       li[index].removeAttribute('id', 'list-color')
//       li[index -1].setAttribute('id', 'list-color')

//       console.log(teste2)
//       console.log(teste)
//     }
//   }
// })


