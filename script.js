
const addTodoButton = document.querySelector('.add-todo-button');
const cancelButton = document.querySelector('.todo-input-container > button:nth-of-type(2)');
const addButton = document.querySelector('.todo-input-container > button:nth-of-type(1)');
const todoNameInput = document.querySelector('.todo-input-container > input[type=text]');
const todoDateInput = document.querySelector('.todo-input-container > input[type=date]');

const addProjectButton = document.querySelector('.add-project-button');
const projectCancelButton = document.querySelector('.project-input-container > button:nth-of-type(2)');
const projectAddButton = document.querySelector('.project-input-container > button:nth-of-type(1)');
const projectNameInput = document.querySelector('.project-input-container > input[type=text]');





let allProjects = [];

const createProject = (name) => {
    allProjects.push({
        name,
        toDoList: [],
        active: true,
    })
}

function getActiveProject() {
    let activeProjectArray = allProjects.filter(project => project.active);
    return activeProjectArray[0];
}

const createTodo = (name, dueDate) => {
    getActiveProject().toDoList.push({
        name,
        dueDate,
        complete: false,
    })
}

const makeAllProjectsInactive = () => {
    allProjects.map(project => project.active = false);
}

//DOM


const addTodo = (() => {
    const addTodoButtonContainer = document.querySelector('.add-todo-button-container');
    const todoInputContainer = document.querySelector('.todo-input-container');

    function showTodoInput() {
        addTodoButtonContainer.style.display = "none";
        todoInputContainer.style.display = "flex";
    }

    function hideTodoInput() {
        addTodoButtonContainer.style.display = "flex";
        todoInputContainer.style.display = "none";
    }
    return {
        showTodoInput,
        hideTodoInput,
    }

})()


const addProject = (() => {
    const addProjectButtonContainer = document.querySelector('.add-project-button-container');
    const projectInputContainer = document.querySelector('.project-input-container');

    function showProjectInput() {
        addProjectButtonContainer.style.display = "none";
        projectInputContainer.style.display = "flex";
    }

    function hideProjectInput() {
        addProjectButtonContainer.style.display = "flex";
        projectInputContainer.style.display = "none";
    }
    return {
        showProjectInput,
        hideProjectInput,
    }

})()


//Eventlisteners


addTodoButton.addEventListener('click', addTodo.showTodoInput);
cancelButton.addEventListener('click', addTodo.hideTodoInput);
addButton.addEventListener('click', () => {
    createTodo(todoNameInput.value, todoDateInput.value);
    renderTodos();
    createDeleteTodoListener();
    //createCheckboxListener();
    addTodo.hideTodoInput();
})

addProjectButton.addEventListener('click', addProject.showProjectInput);
projectCancelButton.addEventListener('click', addProject.hideProjectInput);
projectAddButton.addEventListener('click', () => {
    makeAllProjectsInactive();
    createProject(projectNameInput.value);
    renderProjectTitle();
    renderProjects();
    renderTodos();
    createDeleteTodoListener();
    addProject.hideProjectInput();
})








function renderProjects() {
    //har kommet hit
    const projectContainerContainer = document.querySelector('.project-container-container');
    projectContainerContainer.innerHTML = '';
    for (let i = 0; i <allProjects.length; i++) {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-container');
        const project = document.createElement('div');
        project.classList.add('project');
        const trash = document.createElement('i');
        trash.classList.add('fa-solid', 'fa-trash-can');
        project.innerText = allProjects[i].name;
        projectContainer.appendChild(project);
        projectContainer.appendChild(trash);
        projectContainerContainer.appendChild(projectContainer);
    }
}



function renderTodos() {
    const todoContainerContainer = document.querySelector('.todo-container-container');
    todoContainerContainer.innerHTML = '';
    for (let i = 0; i < getActiveProject().toDoList.length; i++) {
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        const checkbox = document.createElement('div');
        checkbox.classList.add('checkbox');
        const todo = document.createElement('div');
        todo.classList.add('todo');
        const dueDate = document.createElement('div');
        dueDate.classList.add('due-date');
        const trash = document.createElement('i');
        trash.classList.add('fa-solid', 'fa-trash-can');
        todo.innerText = getActiveProject().toDoList[i].name;
        dueDate.innerText = getActiveProject().toDoList[i].dueDate;
        if (getActiveProject().toDoList[i].complete) {
            checkbox.classList.add('checkbox-checked');
        };
        todoContainer.appendChild(checkbox);
        todoContainer.appendChild(todo);
        todoContainer.appendChild(dueDate);
        todoContainer.appendChild(trash);

        todoContainerContainer.appendChild(todoContainer);
    }
}

function renderProjectTitle() {
    const title = getActiveProject().name;
    const dynamicProjectTitle = document.querySelector('.right-container > .project-title');
    dynamicProjectTitle.textContent = title;
}



function createDeleteTodoListener() {
    const todoDeleteBtns = document.querySelectorAll('.todo-container > i');
    todoDeleteBtns.forEach((btn, index) => btn.addEventListener('click', () => {
        getActiveProject().toDoList.splice(index, 1);
        renderTodos();
    }))
}

/* function createCheckboxListener() {
    const checkboxes = document.querySelectorAll('.todo-container > div:first-of-type');
    checkboxes.forEach((checkbox, index) => checkbox.addEventListener('click', () => {
        
        renderTodos();
    }))
    //renderTodos();
 }*/



