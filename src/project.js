class Project {
    constructor(name) {
        this.name = name;
    }    

    rename(name) {
        this.name = name;
    }
}

function createProject(name) {
    return new Project(name);
};

export {Project, createProject};