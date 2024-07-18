// import './style.css';
// import { format } from "date-fns";
// import deleteIcon from './delete.png';

// const projects = [];
// const defaultTodos = [];
// let currentProject = null;
// const todos_main_container = document.querySelector('.todos-main-container');

// class Todo {
//     constructor(title, description, priority, dueDate) {
//         this.title = title;
//         this.description = description;
//         this.priority = priority;
//         this.dueDate = dueDate;
//     }
// }

// class Project {
//     constructor(title, todos = []) {
//         this.title = title;
//         this.todos = todos;
//     }
//     addTodo(todo) {
//         this.todos.push(todo);
//         // displayTodos();
//     }
//     deleteTodo(todo) {
//         console.log("delete")
//         const todoIndex = this.todos.findIndex(t => t.title === todo.title);
//         if (todoIndex != -1) {
//             this.todos.splice(todoIndex, 1);
//         }
//         else console.log("Todo not found!");
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     render();
// });

// function render() {
//     const projects_container = document.querySelector('.projects-container');
//     projects_container.innerHTML = '';

//     displayDefaultProject();

//     projects.forEach((project) => {
//         const project_container = document.createElement('div');
//         project_container.classList.add('project-container');

//         const project_button = document.createElement('button');
//         project_button.classList.add('project-button');
//         project_button.innerText = project.title;

//         const project_delete_button = document.createElement('button');
//         project_delete_button.classList.add('project-delete-button');
//         project_delete_button.innerHTML = `<img src = "${deleteIcon}"/>`;

//         project_container.appendChild(project_button);
//         project_container.appendChild(project_delete_button);
//         projects_container.appendChild(project_container);

//         project_button.addEventListener('click', () => {
//             displayProject(project);
//         })

//         project_delete_button.addEventListener('click', () => {
//             deleteProject(project);
//         })
//     })

//     const addProjectButton = document.createElement('button');
//     addProjectButton.classList.add('project-button');
//     addProjectButton.innerText = "New Project";
//     addProjectButton.addEventListener('click', () => {
//         showNewProjectForm();
//     })

//     projects_container.appendChild(addProjectButton);

// }

// function deleteProject(project){
//     console.log("delete project");
//     const projectIndex = projects.findIndex(p => p.title === project.title);
//         if (projectIndex != -1) {
//             projects.splice(projectIndex, 1);
//         }
//         else console.log("Todo not found!");
//     render();    
// }

// function displayDefaultProject() {
//     currentProject = null;
//     todos_main_container.innerHTML = '';

//     defaultTodos.forEach(todo => {
//         const todo_div = document.createElement('div');
//         todo_div.classList.add('todo-div');

//         const todo_ele = document.createElement('div');
//         todo_ele.classList.add('todo-ele');

//         const todo_title = document.createElement('h3');
//         todo_title.innerText = todo.title;
//         const todo_description = document.createElement('p');
//         todo_description.innerText = `Description: ${todo.description}`;
//         const todo_priority = document.createElement('p');
//         todo_priority.innerText = `Priority: ${todo.priority}`;
//         const due_date = document.createElement('p');
//         due_date.innerText = `Due Date: ${todo.dueDate}`;

//         const delete_button = document.createElement('button');
//         delete_button.classList.add('delete-button');
//         delete_button.innerText = "Delete task"

//         todo_div.appendChild(todo_ele);
//         todo_ele.appendChild(todo_title);
//         todo_ele.appendChild(todo_description);
//         todo_ele.appendChild(todo_priority);
//         todo_ele.appendChild(due_date);
//         todo_div.appendChild(delete_button);

//         todos_main_container.appendChild(todo_div);

//         delete_button.addEventListener('click', () => {
//             defaultProject.deleteTodo(todo);
//             displayDefaultProject();
//         })
//     })
// }

// function displayProject(project) {
//     currentProject = project;
//     todos_main_container.innerHTML = '';
//     displayTodos(project.todos, project);
// }

// function showNewProjectForm() {
//     const existingForm = document.querySelector('.project-form');
//     if (existingForm) {
//         existingForm.remove();
//     }

//     const projects_container = document.querySelector('.projects-container');

//     const projectForm = document.createElement('div');
//     projectForm.classList.add('project-form');

//     const newProjectLabel = document.createElement('label');
//     newProjectLabel.setAttribute('for', 'project-title');
//     newProjectLabel.innerText = "Project Title:";

//     const newProjectTitle = document.createElement('input');
//     newProjectTitle.setAttribute('type', 'text');
//     newProjectTitle.setAttribute('id', 'project-title');
//     newProjectTitle.setAttribute('name', 'project-title');

//     const submitProjectButton = document.createElement('button');
//     submitProjectButton.innerText = "Create New Project";
//     submitProjectButton.classList.add('submit-project-button');

//     projectForm.appendChild(newProjectLabel);
//     projectForm.appendChild(newProjectTitle);
//     projectForm.appendChild(submitProjectButton);

//     projects_container.appendChild(projectForm);

//     document.querySelector('.submit-project-button').addEventListener('click', (event) => {
//         event.preventDefault();

//         const projectTitle = document.getElementById('project-title').value;
//         const newProject = new Project(projectTitle, []);
//         addProject(newProject);
//     })
// }

// document.getElementById('submit-button').addEventListener('click', (event) => {
//     event.preventDefault();

//     const title = document.getElementById('todo-title').value;
//     const description = document.getElementById('description').value;
//     const priority = document.getElementById('priority').value;
//     const dueDate = document.getElementById('dueDate').value;

//     const todo = new Todo(title, description, priority, dueDate);

//     if (currentProject) {
//         currentProject.addTodo(todo);
//         displayProject(currentProject);
//     }
//     else {
//         defaultProject.addTodo(todo);
//         displayDefaultProject();
//     }
//     // displayTodos();
// })

// function addDefaultTodo(todo) {
//     defaultTodos.push(todo);
// }

// function addProject(project) {
//     projects.push(project);
//     render();
// }

// function displayTodos(todos, project) {

//     todos_main_container.innerHTML = '';

//     todos.forEach(todo => {
//         const todo_div = document.createElement('div');
//         todo_div.classList.add('todo-div');

//         const todo_ele = document.createElement('div');
//         todo_ele.classList.add('todo-ele');

//         const todo_title = document.createElement('h3');
//         todo_title.innerText = todo.title;
//         const todo_description = document.createElement('p');
//         todo_description.innerText = `Description: ${todo.description}`;
//         const todo_priority = document.createElement('p');
//         todo_priority.innerText = `Priority: ${todo.priority}`;
//         const due_date = document.createElement('p');
//         due_date.innerText = `Due Date: ${todo.dueDate}`;

//         const delete_button = document.createElement('button');
//         delete_button.classList.add('delete-button');
//         delete_button.innerText = "Delete task"

//         todo_div.appendChild(todo_ele);
//         todo_ele.appendChild(todo_title);
//         todo_ele.appendChild(todo_description);
//         todo_ele.appendChild(todo_priority);
//         todo_ele.appendChild(due_date);
//         todo_div.appendChild(delete_button);

//         todos_main_container.appendChild(todo_div);

//         delete_button.addEventListener('click', () => {
//             project.deleteTodo(todo);
//             displayTodos(todos, project);
//         })

//     });
// }

// const defaultProject = new Project("Default Project", defaultTodos);
// const Project1 = new Project("Project 1", []);
// const Project2 = new Project("Project 2", []);

// addProject(defaultProject)
// addProject(Project1)
// addProject(Project2)

// const defaultTodo1 = new Todo("Neetcode", "Practice neetcode 150", 1, format(new Date(2024, 9, 11), "yyyy-MM-dd"));
// const defaultTodo2 = new Todo("Neetcode", "Practice neetcode 150", 1, format(new Date(2024, 9, 11), "yyyy-MM-dd"));
// const defaultTodo3 = new Todo("Neetcode", "Practice neetcode 150", 1, format(new Date(2024, 9, 11), "yyyy-MM-dd"));

// addDefaultTodo(defaultTodo1);
// addDefaultTodo(defaultTodo2);
// addDefaultTodo(defaultTodo3);

// const todo1 = new Todo("Leetcode", "Practice Blind 75", 1, format(new Date(2024, 9, 11), "yyyy-MM-dd"));
// const todo2 = new Todo("Sql", "Practice SQL from W3S", 1, format(new Date(2024, 9, 11), "yyyy-MM-dd"));

// Project1.addTodo(todo1);
// Project2.addTodo(todo2);


import './style.css';
import { format } from "date-fns";
import deleteIcon from './delete.png';

const projects = [];
const defaultTodos = [];
let currentProject = null;
const todos_main_container = document.querySelector('.todos-main-container');

class Todo {
    constructor(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}

class Project {
    constructor(title, todos = []) {
        this.title = title;
        this.todos = todos;
    }
    addTodo(todo) {
        this.todos.push(todo);
        saveProjectsToLocalStorage();

    }
    deleteTodo(todo) {
        const todoIndex = this.todos.findIndex(t => t.title === todo.title);
        if (todoIndex !== -1) {
            this.todos.splice(todoIndex, 1);
        } else {
            console.log("Todo not found!");
        }
        saveProjectsToLocalStorage();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjectsFromLocalStorage();
    if (projects.length === 0) {
        addInitialProjects();
    }
    render();
    displayDefaultProject();
});

function saveProjectsToLocalStorage() {
    const projectsToSave = projects.map(project => ({
        title: project.title,
        todos: project.todos
    }));
    localStorage.setItem('projects', JSON.stringify(projectsToSave));
}

function loadProjectsFromLocalStorage() {
    const savedProjects = JSON.parse(localStorage.getItem('projects'));
    if (savedProjects) {
        savedProjects.forEach(projectData => {
            const project = new Project(projectData.title, projectData.todos.map(todoData => new Todo(
                todoData.title, todoData.description, todoData.priority, todoData.dueDate
            )));
            projects.push(project);
        });
    }
}

function render() {
    const projects_container = document.querySelector('.projects-container');
    projects_container.innerHTML = '';

    displayDefaultProject();

    projects.forEach((project) => {
        const project_container = document.createElement('div');
        project_container.classList.add('project-container');

        const project_button = document.createElement('button');
        project_button.classList.add('project-button');
        project_button.innerText = project.title;

        const project_delete_button = document.createElement('button');
        project_delete_button.classList.add('project-delete-button');
        project_delete_button.innerHTML = `<img src="${deleteIcon}"/>`;

        project_container.appendChild(project_button);
        project_container.appendChild(project_delete_button);
        projects_container.appendChild(project_container);

        project_button.addEventListener('click', () => {
            displayProject(project);
        });

        project_delete_button.addEventListener('click', () => {
            deleteProject(project);
        });
    });

    const addProjectButton = document.createElement('button');
    addProjectButton.classList.add('project-button');
    addProjectButton.innerText = "New Project";
    addProjectButton.addEventListener('click', () => {
        showNewProjectForm();
    });

    projects_container.appendChild(addProjectButton);
}

function deleteProject(project) {
    const projectIndex = projects.findIndex(p => p.title === project.title);
    if (projectIndex !== -1) {
        projects.splice(projectIndex, 1);
    } else {
        console.log("Project not found!");
    }
    saveProjectsToLocalStorage();
    render();
}

function displayDefaultProject() {
    const defaultProject = projects.find(project => project.title === "Default Project");

    currentProject = null;
    todos_main_container.innerHTML = '';

    defaultTodos.forEach(todo => {
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
        const due_date = document.createElement('p');
        due_date.innerText = `Due Date: ${todo.dueDate}`;

        const delete_button = document.createElement('button');
        delete_button.classList.add('delete-button');
        delete_button.innerText = "Delete task";

        todo_div.appendChild(todo_ele);
        todo_ele.appendChild(todo_title);
        todo_ele.appendChild(todo_description);
        todo_ele.appendChild(todo_priority);
        todo_ele.appendChild(due_date);
        todo_div.appendChild(delete_button);

        todos_main_container.appendChild(todo_div);

        delete_button.addEventListener('click', () => {
            defaultProject.deleteTodo(todo);
            displayDefaultProject();
        });
    });
}

function displayProject(project) {
    currentProject = project;
    todos_main_container.innerHTML = '';
    displayTodos(project.todos, project);
}

function showNewProjectForm() {
    const existingForm = document.querySelector('.project-form');
    if (existingForm) {
        existingForm.remove();
    }

    const projects_container = document.querySelector('.projects-container');

    const projectForm = document.createElement('div');
    projectForm.classList.add('project-form');

    const newProjectLabel = document.createElement('label');
    newProjectLabel.setAttribute('for', 'project-title');
    newProjectLabel.innerText = "Project Title:";

    const newProjectTitle = document.createElement('input');
    newProjectTitle.setAttribute('type', 'text');
    newProjectTitle.setAttribute('id', 'project-title');
    newProjectTitle.setAttribute('name', 'project-title');

    const submitProjectButton = document.createElement('button');
    submitProjectButton.innerText = "Create New Project";
    submitProjectButton.classList.add('submit-project-button');

    projectForm.appendChild(newProjectLabel);
    projectForm.appendChild(newProjectTitle);
    projectForm.appendChild(submitProjectButton);

    projects_container.appendChild(projectForm);

    document.querySelector('.submit-project-button').addEventListener('click', (event) => {
        event.preventDefault();

        const projectTitle = document.getElementById('project-title').value;
        const newProject = new Project(projectTitle, []);
        addProject(newProject);
    });
}

document.getElementById('submit-button').addEventListener('click', (event) => {
    event.preventDefault();

    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('dueDate').value;

    const todo = new Todo(title, description, priority, dueDate);

    if (currentProject) {
        currentProject.addTodo(todo);
        displayProject(currentProject);
    } else {
        defaultProject.addTodo(todo);
        displayDefaultProject();
    }
    saveProjectsToLocalStorage();
});

function addDefaultTodo(todo) {
    defaultTodos.push(todo);
}

function addProject(project) {
    projects.push(project);
    saveProjectsToLocalStorage();
    render();
}

function displayTodos(todos, project) {
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
        const due_date = document.createElement('p');
        due_date.innerText = `Due Date: ${todo.dueDate}`;

        const delete_button = document.createElement('button');
        delete_button.classList.add('delete-button');
        delete_button.innerText = "Delete task";

        todo_div.appendChild(todo_ele);
        todo_ele.appendChild(todo_title);
        todo_ele.appendChild(todo_description);
        todo_ele.appendChild(todo_priority);
        todo_ele.appendChild(due_date);
        todo_div.appendChild(delete_button);

        todos_main_container.appendChild(todo_div);

        delete_button.addEventListener('click', () => {
            project.deleteTodo(todo);
            displayTodos(todos, project);
        });
    });
}

function addInitialProjects() {
    const defaultProject = new Project("Default Project", defaultTodos);
    addProject(defaultProject);

    const defaultTodo1 = new Todo("Neetcode", "Practice neetcode 150", 1, format(new Date(2024, 9, 11), "yyyy-MM-dd"));
    const defaultTodo2 = new Todo("Neetcode", "Practice neetcode 150", 1, format(new Date(2024, 9, 11), "yyyy-MM-dd"));
    const defaultTodo3 = new Todo("Neetcode", "Practice neetcode 150", 1, format(new Date(2024, 9, 11), "yyyy-MM-dd"));

    addDefaultTodo(defaultTodo1);
    addDefaultTodo(defaultTodo2);
    addDefaultTodo(defaultTodo3);

    const Project1 = new Project("Project 1", []);
    const Project2 = new Project("Project 2", []);

    addProject(Project1);
    addProject(Project2);

    const todo1 = new Todo("Leetcode", "Practice Blind 75", 1, format(new Date(2024, 9, 11), "yyyy-MM-dd"));
    const todo2 = new Todo("Sql", "Practice SQL from W3S", 1, format(new Date(2024, 9, 11), "yyyy-MM-dd"));

    Project1.addTodo(todo1);
    Project2.addTodo(todo2);
}
