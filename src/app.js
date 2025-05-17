import "./styles.css";
import { Project, createProject } from "./project";
import { displayProjects } from "./render";

if (localStorage.getItem('projects') === null) {
    const defaultProject = createProject('Default');
    displayProjects([defaultProject]);
}