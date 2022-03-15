
import { addTodo, addProject } from "./DOM.js";
import { createProject, getActiveProject, createTodo, makeAllProjectsInactive } from "./logic.js";
import { renderTodos, renderProjectTitle, renderProjects } from "./render.js";
import { createDeleteProjectListener, createDeleteTodoListener, createSelectProjectListener } from "./dynamiclisteners.js";

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



//static listeners


addTodoButton.addEventListener('click', () => {
    if (allProjects === []) {
        return;
    }
    else {
        addTodo.showTodoInput();
    }
});

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
    //renderProjectTitle();
    renderProjects();
    renderTodos();
    createDeleteTodoListener();
    createDeleteProjectListener();
    createSelectProjectListener();
    addProject.hideProjectInput();
})

/* function createCheckboxListener() {
    const checkboxes = document.querySelectorAll('.todo-container > div:first-of-type');
    checkboxes.forEach((checkbox, index) => checkbox.addEventListener('click', () => {
        
        renderTodos();
    }))
    //renderTodos();
 }*/



export { allProjects }