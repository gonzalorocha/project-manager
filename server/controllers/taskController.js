const bcryptjs = require("bcryptjs");
const Task = require('./../models/Task');
const Project = require('./../models/Project');
const { validationResult, check } = require('express-validator');
const { translateAliases } = require("./../models/Project");


exports.getTasks = async (req, res) => {
    const { projectId } = req.params;
    try {
        const project = await Project.findById(projectId);
        if (!project) {
            res.status(404).json({
                msg: "Project not found"
            });
        }
        if (project.user != req.user.id) {
            return res.status(401).json({
                msg: "Not authorized"
            });
        }

        const tasks = await Task.find({ projectId: projectId })

        res.json({tasks});

    } catch (err) {
        console.log(err);
        res.status(500).send('There was an error');
    }
}

exports.newTask = async(req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({
            errors: error.array()
        });
    }

    const { projectId } = req.body;

    try {
        const project = await Project.findById(projectId);
        if (!project) {
            res.status(404).json({ msg: "Project not found"});
        }
        if (project.user != req.user.id) {
            return res.status(401).json({ msg: "Not authorized"});
        }

        const task = new Task(req.body);
        
        await task.save();
        res.json({task});

    } catch (err) {
        console.log(err);
        res.status(500).send('There was an error');
    }
}

exports.updateTask = async(req, res) => {
    const { projectId, name, state } = req.body;
    const { id } = req.params;

    try {
        const project = await Project.findById(projectId);
        if (!project) {
            res.status(404).json({
                msg: "Project not found"
            });
        }
        if (project.user != req.user.id) {
            return res.status(401).json({
                msg: "Not authorized"
            });
        }
        const newTask = {};

        if (name) {
            newTask.name = name
        }
        if (state) {
            newTask.state = state
        }

        let task = await Task.findById(id);
        if (!task) {
            res.status(404).json({
                msg: "task not found"
            });
        }
    
        task = await Task.findOneAndUpdate({ _id: id }, newTask, {new: true});
        res.json({ task });
    } catch (err) {
        console.log(err);
        res.status(500).send('There was an error');
    }
}

exports.deleteTask = async(req, res) => {
    const { id } = req.params;
    try {
        let task = await Task.findById(id);
        if (!task) {
            res.status(404).json({
                msg: "task not found"
            });
        }

        const project = await Project.findById(task.projectId);
        if (!project) {
            res.status(404).json({
                msg: "Project not found"
            });
        }
        if (project.user != req.user.id) {
            return res.status(401).json({
                msg: "Not authorized"
            });
        }

        await Task.findByIdAndRemove({_id: id});
        res.json({msg: "The task was deleted"});
    } catch (err) {
        console.log(err);
        res.status(500).send('There was an error');
    }

}


