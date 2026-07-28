const tasks = require("../../data/tasks.json");

exports.getAll = () => tasks;

exports.get = id => tasks.find(t => t.id == id);

exports.create = task => {
    task.id = Date.now();
    tasks.push(task);
    return task;
};

exports.update = (id, body) => {
    const task = tasks.find(t => t.id == id);

    if (!task) return null;

    Object.assign(task, body);

    return task;
};

exports.remove = id => {
    const index = tasks.findIndex(t => t.id == id);

    if (index !== -1) {
        tasks.splice(index, 1);
    }
};
