const express = require('express');
const router = express.Router();
const verify = require('./../middleware/verify')
const taskController = require('./../controllers/taskController');
const { check} = require('express-validator');

router.get('/:projectId', verify, taskController.getTasks);

router.post('/', verify, [
    check('name', 'The name of the task is require').not().isEmpty(),
    check('projectId', 'The project of the task is require').not().isEmpty()

], taskController.newTask);

router.put('/:id', verify, [
    check('name', 'The name of the task is require').not().isEmpty(),
    check('projectId', 'The project of the task is require').not().isEmpty()
], taskController.updateTask);

router.delete('/:id', verify, taskController.deleteTask);


module.exports = router;
