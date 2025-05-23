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

export function displayTodos(project) {
    const main = document.querySelector('.main');

    const header = document.querySelector('.header');
    const heading = document.createElement('h2');
    heading.classList.add('project-heading');
    heading.textContent = project.name;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container'); 

    const addTodoButton = document.createElement('button');
    addTodoButton.classList.add('add-todo');
    addTodoButton.textContent = 'add Todo';

    buttonContainer.appendChild(addTodoButton);

    header.append(heading, buttonContainer);
    
    const todoContainer = document.createElement('section');
    todoContainer.classList.add('todo-container');

    project.todos.forEach(element => {

        const todo = document.createElement('div');
        todo.classList.add('todo');

        const todoInfo = document.createElement('div');
        todoInfo.classList.add('todo-info');

        const todoHeading = document.createElement('h3');
        todoHeading.textContent = element.title;

        const para1 = document.createElement('p');
        para1.textContent = element.description;

        const para2 = document.createElement('p');
        para2.textContent = element.dueDate;

        const priorityContainer = document.createElement('div');
        priorityContainer.classList.add('priority-container');
        
        const priority = document.createElement('div');
        priority.classList.add('priority');
        priority.textContent = element.priority;

        priorityContainer.appendChild(priority);
        todoInfo.append(todoHeading, para1, para2);

        todo.append(todoInfo, priorityContainer);

        todoContainer.append(todo);

        main.appendChild(todoContainer);

    });

}