const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/auth'); // Vamos criar este middleware em seguida

router.post('/', authMiddleware, projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProject);
router.put('/:id', authMiddleware, projectController.updateProject);
router.delete('/:id', authMiddleware, projectController.deleteProject);

module.exports = router;
