const { check, validationResult } = require('express-validator');

const validUser = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Enter a valid Email').isEmail(),
  check('password', 'Enter password with 6 or more characters').isLength({
    min: 6,
  }),
];

module.exports = validUser;
