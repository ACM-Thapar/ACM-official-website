const { check, validationResult } = require('express-validator');

exports.validUser = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Enter a valid Email').isEmail(),
  check('password', 'Enter password with 6 or more characters').isLength({
    min: 6,
  }),
];

exports.validAuth = [
  check('email', 'Enter a valid Email').isEmail(),
  check('password', 'Password Invalid').exists(),
];

exports.validMemberProfile = [
  check('name', 'Name is required').not().isEmpty(),
  check('gradYear', 'Graduation Year is required').not().isEmpty(),
  check('branch', 'Branch is required').not().isEmpty(),
  check('rollNo', 'Roll Number is required').not().isEmpty(),
  check('personalEmail', 'Personal Email Id is required').not().isEmpty(),
  check('collegeEmail', 'College Email Id is required').not().isEmpty(),
];
