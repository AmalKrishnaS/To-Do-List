import "./styles.css";
import { createProject } from "./project";
import { displayProjects } from "./render";
import {displayTodos} from "./render.js";

function getProject() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects; 
}

function setProject(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

document.addEventListener('DOMContentLoaded', () => {
    const projects = getProject();
    if (projects === null) {
        projects.push({name:'Default', todos: {}})
        displayProjects(projects[0]);
    } 
    else {
        displayProjects(projects);
        displayTodos(projects[0]);
    }
})

const projectDialog = document.querySelector('.project-dialog');
const addProjectButton = document.querySelector('.add-project');
const projectForm = document.querySelector('.project-form'); 

addProjectButton.addEventListener('click', (e) => {
    projectDialog.showModal();    
});

const cancelProjectButton = document.querySelector('.cancel-project-button');
cancelProjectButton.addEventListener('click', (e) => {
    e.preventDefault();
    projectDialog.close();    
})