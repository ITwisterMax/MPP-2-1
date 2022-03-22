const tasks = [];

module.exports = class Task {
    constructor(name, description, status, date, attach) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.date = date;
        this.attach = attach;
    }

    static getAll() {
        return tasks;
    }

    save() {
        tasks.push(this);
    }
}