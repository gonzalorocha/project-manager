const express = require('express');
const router = express.Router();
const verify = require('./../middleware/verify')
const projectController = require('./../controllers/projectController');
const { check } = require('express-validator');

router.get('/', verify, projectController.getProjects);

router.post('/', verify, [
    check('name', 'The name of the project is require').not().isEmpty()
],projectController.newProject);

router.put('/:id', verify, [
    check('name', 'The name of the project is require').not().isEmpty()
], projectController.updateProject);

router.delete('/:id', verify, projectController.deleteProject);



module.exports = router;
