const { getProjects, addProject, modifyProject, removeProject } = require("../controllers/projectController.js");
const express = require('express');
const projectController = require('../controllers/projectController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Métodos express, envia los parametros req y res a cada parte programada.
router.get('/', authenticateToken, projectController.getAllProjects);
router.post('/', authenticateToken, projectController.createProject);


module.exports = router;