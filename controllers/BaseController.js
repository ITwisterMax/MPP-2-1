const Task = require("../models/Task.js");

exports.getTasks = function (request, response) {
    response.render("main", {
        tasks: Task.getAll()
    })
};

exports.addTask = function (req, res, next) {
    const name = req.body.name;
    const description = req.body.description;
    const status = req.body.status;
    const date = req.body.date;
    const attach = req.file?.originalname;

    const task = new Task(name, description, status, date, attach);
    task.save();

    res.redirect("/");
};

