const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.post('/', controller.createTask);
router.get('/', controller.getTasks);
router.put('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);
router.put('/complete/:id', controller.markComplete);

module.exports = router;