import "./styles.css";
import { createProject } from "./project";
import { displayProjects } from "./render";
import {displayTodos} from "./render.js";

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('projects') === null) {
        const defaultProject = createProject('Default');
        displayProjects([defaultProject]);
    } 
    else {
        const defaultProject = JSON.parse(localStorage.getItem('projects'))[0];
        displayTodos(defaultProject);
    }
})