class Project {
    constructor(name) {
        this.name = name;
    }    

    rename(name) {
        this.name = name;
    }
}

function createProject() {
    return new Project('Default');
}

export {Project, createProject};