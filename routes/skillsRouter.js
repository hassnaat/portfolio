const express = require('express');
const skillsRouter = express.Router();
const {getSkills,getSkill,addSkill,deleteSkill,updateSkill} = require('../controllers/skillsController');
const requireLogin = require('../middleware/requireLogin');

skillsRouter.get('/',getSkills);
skillsRouter.post('/',requireLogin,addSkill);
skillsRouter.delete('/:id',requireLogin,deleteSkill)


module.exports = skillsRouter;