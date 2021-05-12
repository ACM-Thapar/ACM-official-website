const express = require('express');
const router = express.Router();
const user_post = require('../controllers/user_post');
const { check, validationResult } = require('express-validator');

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Enter a valid Email').isEmail(),
    check('password', 'Enter password with 6 or more characters').isLength({
      min: 6,
    }),
  ],
  user_post,
);

module.exports = router;
