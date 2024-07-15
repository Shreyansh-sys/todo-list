import './style.css';

const todos = [];
const todos_main_container = document.querySelector('.todos-main-container');

class Todo {
    constructor(title, description, priority) {
        this.title = title;
        this.description = description;
        this.priority = priority;
    }
}

document.getElementById('submit-button').addEventListener('click', (event) => {
    event.preventDefault();

    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;

    const todo = new Todo(title, description, priority);

    addTodo(todo);
    displayTodos();
})

function addTodo(todo) {
    todos.push(todo);
    console.log(todos)
}

function displayTodos() {

    todos_main_container.innerHTML = '';

    todos.forEach(todo => {
        const todo_div = document.createElement('div');
        todo_div.classList.add('todo-div');
        
        const todo_ele = document.createElement('div');
        todo_ele.classList.add('todo-ele');
        
        const todo_title = document.createElement('h3');
        todo_title.innerText = todo.title;
        const todo_description = document.createElement('p');
        todo_description.innerText = `Description: ${todo.description}`;
        const todo_priority = document.createElement('p');
        todo_priority.innerText = `Priority: ${todo.priority}`;

        const delete_button = document.createElement('button');
        delete_button.classList.add('delete-button');
        delete_button.innerText = "Delete task"

        todo_div.appendChild(todo_ele);
        todo_ele.appendChild(todo_title);
        todo_ele.appendChild(todo_description);
        todo_ele.appendChild(todo_priority);
        todo_div.appendChild(delete_button);
        
        todos_main_container.appendChild(todo_div);

        // const delete_btn = document.querySelector('.delete-button');
        delete_button.addEventListener('click', () => {
            deleteTodo(todo);
            displayTodos();
        })
        
    });
}

function deleteTodo(todo){
    console.log("delete")
    const todoIndex = todos.findIndex(t => t.title === todo.title);
    if (todoIndex != -1) {
        todos.splice(todoIndex, 1);
    }
    else console.log("Todo not found!");
}

