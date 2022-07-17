const express = require('express');
const router = express.Router();

const { validUser, validAuth } = require('../utils/validation-checks');

const {
  login,
  register,
  getAllUser,
  updatePassword,
  getUser,
  deleteUser,
  updateUser,
  // deleteUser,
} = require('../controllers/auth_post');
const admin = require('../middleware/admin.js');
const auth = require('../middleware/auth.js');

//login
router.route('/login').post(validAuth, login);

//register
router.post('/', validUser, register);

//get all users
router
  .route('/user')
  // .get([auth], admin, getAllUser)
  .get(getAllUser)
  .put(auth, updatePassword); //update password

//get user by Id
router
  .route('/user/:id')
  .get(getUser)
  // .delete(auth, deleteUser)
  // .put(auth, updateUser);
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
