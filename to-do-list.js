const todoList =[{name:'Make dinner' ,
                 dueDate : '2026-09-09'},
                 ];
                                                                

renderToDoList();

function renderToDoList() {
let todoListHTML = '';

todoList.forEach((todoObject , index) => {
  //const name = todoObject.name;
  const {name , dueDate} = todoObject;
  const html = `
  <div>${name} </div>
  <div>${dueDate} </div>
   <button class="delete-todo-btn js-delete-todo-btn"
   >Delete</button>
   `;
  todoListHTML += html;
})

document.querySelector('.js-todoList').innerHTML=todoListHTML;

  document.querySelectorAll('.js-delete-todo-btn') 
   .forEach((deleteButton , index) => {
        deleteButton.addEventListener('click' , () => {
             todoList.splice(index , 1);
             renderToDoList();
        })
   })
}

document.querySelector('.js-add-todo-btn')
   .addEventListener('click' , () => {
        addTodo();
   })

function addTodo() {
  const inputElem = document.querySelector('.js-name-input');
   const name = inputElem.value;
   const dateInputElem = document.querySelector('.js-date-input');
   const dueDate = dateInputElem.value;

   todoList.push({name : name , dueDate : dueDate});

   inputElem.value = '';
   dateInputElem.value = '';

   renderToDoList();

}