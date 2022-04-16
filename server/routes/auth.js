const express = require('express');
const router = express.Router();

const { validUser, validAuth } = require('../utils/validation-checks');

const { login, register,getAllUser } = require('../controllers/auth_post');
const admin = require('../middleware/admin.js')
const auth = require('../middleware/auth.js')

router.route('/login').post(validAuth, login);

router.post('/', validUser, register);

router.get('/user',[auth],admin,getAllUser)

module.exports = router;
