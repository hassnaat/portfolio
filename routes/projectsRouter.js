const express = require('express');
const projectsRouter = express.Router();
const {getProjects,addProject, deleteProject, updateProject} = require('../controllers/ProjectsController');
const requireLogin = require('../middleware/requireLogin');


projectsRouter.get('/',getProjects);
projectsRouter.post('/',requireLogin,addProject);
projectsRouter.delete('/:id',requireLogin,deleteProject);
module.exports = projectsRouter;