import { getActiveProject, makeAllProjectsInactive } from "./logic.js";
import { allProjects } from "./script.js";
import { renderTodos, renderProjects, renderProjectTitle } from "./render.js";

export function createDeleteTodoListener() {
    const todoDeleteBtns = document.querySelectorAll('.todo-container > i');
    todoDeleteBtns.forEach((btn, index) => btn.addEventListener('click', () => {
        getActiveProject().toDoList.splice(index, 1);
        renderTodos();
    }))
}


export function createDeleteProjectListener() {
    const projectDeleteBtns = document.querySelectorAll('.project-container > i');
    projectDeleteBtns.forEach((btn, index) => btn.addEventListener('click', () => {
        allProjects.splice(index, 1);
        renderProjects();
    }))
}

export function createSelectProjectListener() {
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => project.addEventListener('click', () => {
        makeAllProjectsInactive();
        allProjects[index].active = true;
        renderProjectTitle();
        renderTodos();
    }))
}