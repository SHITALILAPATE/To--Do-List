const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
let taskId = 1; 

function addTodo() {
  const todoText = newTodoInput.value.trim();

  if (todoText === '') {
    alert('Please enter a task.');
    return;
  }

  const todoItem = document.createElement('li');
  todoItem.innerHTML = `
    <label for="task-${taskId}">${taskId}. ${todoText} 🐻</label>
    <input type="checkbox" id="task-${taskId}">
    <button onclick="deleteTodo(this)">Delete</button>
  `;

  todoList.appendChild(todoItem);
  newTodoInput.value = '';
  taskId++; 
}

function deleteTodo(btn) {
  const todoItem = btn.parentElement;
  todoList.removeChild(todoItem);
}

