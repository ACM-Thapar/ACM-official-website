const express = require('express');
const router = express.Router();
const auth_post = require('../controllers/auth_post');
const { check, validationResult } = require('express-validator');

router.post(
  '/',
  [
    check('email', 'Enter a valid Email').isEmail(),
    check('password', 'Password Invalid').exists(),
  ],
  auth_post,
);

module.exports = router;
