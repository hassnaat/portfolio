const express = require('express');
const router = express.Router();
const {get_user,update_user,login_user} = require('../controllers/userController');
const requireLogin = require('../middleware/requireLogin');
router.get('/',get_user);
router.put('/:id',requireLogin,update_user);
router.post('/login',login_user)


module.exports = router;