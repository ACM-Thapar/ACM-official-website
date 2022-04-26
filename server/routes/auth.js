const express = require('express');
const router = express.Router();

const { validUser, validAuth } = require('../utils/validation-checks');

const { login, register,getAllUser,updatePassword } = require('../controllers/auth_post');
const admin = require('../middleware/admin.js')
const auth = require('../middleware/auth.js')

//login
router.route('/login').post(validAuth, login);


//register
router.post('/', validUser, register);


//get all users
router
.route('/user')
.get([auth],admin,getAllUser)
.put([auth],updatePassword)  //update password



module.exports = router;
