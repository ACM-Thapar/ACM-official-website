const express = require('express');
const router = express.Router();

const { validUser, validAuth } = require('../utils/validation-checks');

const { login, register } = require('../controllers/auth_post');

router.post('/login', validAuth, login);

router.post('/', validUser, register);

module.exports = router;
