const bcryptjs = require("bcryptjs");
const Project = require('./../models/Project');
const { validationResult } = require('express-validator');

exports.getProjects = async(req, res) => {
    const {id} = req.user;
    try {
        const projects = await Project.find({ user: id}).sort({ date: -1 });
        res.status(200).json({ projects });
    } catch (err) {
        console.log(err);
        res.status(500).send('There was an error');
    }
}

exports.newProject = async(req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({
            errors: error.array()
        });
    }

    try {
        const project = new Project(req.body);
        project.user = req.user.id;
        await project.save();
        res.json(project);

    } catch (err) {
        console.log(err);
        res.status(500).send('There was an error');
    }
}

exports.updateProject = async(req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({
            errors: error.array()
        });
    }
    const { name } =req.body;
    const { id } = req.params;
    const newProject = {};

    if (name) {
        newProject.name = name;
    }

    try {
        let project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ msg: "Project not found"});
        }
        if (project.user != req.user.id) {
            return res.status(401).json({ msg: "Not authorized"});
        }

        project = await Project.findOneAndUpdate({ _id: id }, {$set: newProject}, {new: true});
        res.json({ project });

    } catch (err) {
        console.log(err);
        res.status(500).send('There was an error');
    }
}

exports.deleteProject = async( req, res ) => {
    const { id } = req.params;

    try {
        let project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ msg: "Project not found"});
        }
        if (project.user != req.user.id) {
            return res.status(401).json({ msg: "Not authorized"});
        }

        await Project.findByIdAndRemove({ _id: id });
        res.json({ msg: "The project was removed"})
    } catch (err) {
        console.log(err);
        res.status(500).send('There was an error');
    }
}

