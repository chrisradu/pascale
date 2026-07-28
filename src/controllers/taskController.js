const service = require("../services/taskService");

exports.getAll = (req, res) => {
    res.json(service.getAll());
};

exports.getById = (req, res) => {
    res.json(service.get(req.params.id));
};

exports.create = (req, res) => {
    res.status(201).json(service.create(req.body));
};

exports.update = (req, res) => {
    res.json(service.update(req.params.id, req.body));
};

exports.remove = (req, res) => {
    service.remove(req.params.id);
    res.sendStatus(204);
};
