import "./styles.css";
import { createProject, Project } from "./project";
import { displayProjects } from "./render";
import {displayTodos} from "./render.js";

function getProject() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    return projects; 
}

function setProject(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

function hydrateProjects(projects) {
    const hydratedProjects = projects.map(hydrateSingleProject);
    return hydratedProjects;
}

function hydrateSingleProject(project) {
    const hydratedProject = createProject(project.name);
    project.todos.forEach( (todo) => {
        hydratedProject.addTodo(todo.title, todo.description, todo.dueDate, todo.priority);    
    });
    
    return hydratedProject;
}

document.addEventListener('DOMContentLoaded', () => {
    let projects = getProject();
    if (projects === null) {
        projects = [];
        projects.push(new Project('default'));
        setProject(projects);
        displayProjects(projects[0]);
    } 
    else {
        displayProjects(projects);
        displayTodos(projects[0]);
    }
})

const projectDialog = document.querySelector('.project-dialog');
const addProjectButton = document.querySelector('.add-project');
const createProjectButton = document.querySelector('.create-project-button');
const projectForm = document.querySelector('.project-form'); 

addProjectButton.addEventListener('click', (e) => {
    projectDialog.showModal();    
});

createProjectButton.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(projectForm);
    const hydratedProjects = hydrateProjects(getProject());
    hydratedProjects.push(createProject(formData.get('projectName')));
    displayProjects(hydratedProjects);
    projectForm.reset();
    projectDialog.close();
})

const cancelProjectButton = document.querySelector('.cancel-project-button');
cancelProjectButton.addEventListener('click', (e) => {
    e.preventDefault();
    projectDialog.close();    
})