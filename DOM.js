
export const addTodo = (() => {
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


export const addProject = (() => {
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