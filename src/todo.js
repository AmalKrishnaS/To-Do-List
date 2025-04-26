class toDo {
    constructor(title, description, dueDate, priority, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
    }

    rename(title) {
        this.title = title;
    }

    editDescription(description) {
        this.description = description;
    }

    changeDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    changePriority(priority) {
        this.priority = priority;
    }

    changeChecklist(checklist) {
        this.checklist = checklist;
    }

}

export {toDo}