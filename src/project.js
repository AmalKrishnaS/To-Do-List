import { toDo } from "./todo";

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }    

    rename(name) {
        this.name = name;
    }

    addTodo(title, description, dueDate, priority, checklist) {
        this.todos[length] = new toDo(title, description, dueDate, priority, checklist);
    }
}

function createProject(name) {
    return new Project(name);
};

export {Project, createProject};