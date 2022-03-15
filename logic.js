import { allProjects } from "./script.js";


export const createProject = (name) => {
    allProjects.push({
        name,
        toDoList: [],
        active: true,
    })
}

export const getActiveProject = () => {
    let activeProjectArray = allProjects.filter(project => project.active);
    return activeProjectArray[0];
}

export const createTodo = (name, dueDate) => {
    getActiveProject().toDoList.push({
        name,
        dueDate,
        complete: false,
    })
}

export const makeAllProjectsInactive = () => {
    allProjects.map(project => project.active = false);
}