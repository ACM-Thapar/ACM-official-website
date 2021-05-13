const express = require('express');
const router = express.Router();
const user_post = require('../controllers/user_post');
const validUser = require('../utils/validation-checks');

router.post('/', validUser, user_post);

module.exports = router;
