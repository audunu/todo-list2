import { getActiveProject } from "./logic.js";
import { allProjects } from "./script.js";

export function renderProjects() {
    
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
    
    renderProjectTitle();
    renderTodos();
}



export function renderTodos() {
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

export function renderProjectTitle() {
    const title = getActiveProject().name;
    const dynamicProjectTitle = document.querySelector('.right-container > .project-title'); 
    dynamicProjectTitle.textContent = title;
}