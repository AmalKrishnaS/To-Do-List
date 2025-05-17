const projectsContainer = document.querySelector('.projects-container');

export function displayProjects(projectsArray) {
    projectsArray.forEach(element => {
        const p = document.createElement('p');
        const a = document.createElement('a');

        a.textContent = element.name;
        p.appendChild(a);
        projectsContainer.appendChild(p);
    });
}