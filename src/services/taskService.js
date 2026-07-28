const repository = require("../repositories/taskRepository");

exports.getAll = () => repository.getAll();

exports.get = id => repository.get(id);

exports.create = task => repository.create(task);

exports.update = (id, task) => repository.update(id, task);

exports.remove = id => repository.remove(id);
