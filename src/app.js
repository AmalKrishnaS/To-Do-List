import "./styles.css";
import { createProject } from "./project";
import { displayProjects } from "./render";
import {displayTodos} from "./render.js";

if (localStorage.getItem('projects') === null) {
    const defaultProject = createProject('Default');
    displayProjects([defaultProject]);
} 
else {
    
}