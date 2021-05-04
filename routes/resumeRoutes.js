const express = require('express');
const {updateResume,getResume} = require('../controllers/resumeController');
const resumeRoutes = express.Router();

resumeRoutes.get('/',getResume)
resumeRoutes.put('/',updateResume)

module.exports = resumeRoutes