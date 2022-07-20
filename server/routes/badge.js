const express = require('express');

const {
  createBadge,
  getAllBadge,
  updateBadge,
  getBadge,
  deleteBadge,
  removeUser,
} = require('../controllers/badge.js');
const admin = require('../middleware/admin.js');
const auth = require('../middleware/auth.js');

const router = express.Router();

router
  .route('/')
  .post(auth, admin, createBadge)
  // .post(createBadge)
  .get(auth, getAllBadge);
// .get(getAllBadge);

router
  .route('/:badge_id')
  .put(auth, admin, updateBadge)
  // .put(updateBadge)
  .get(auth, getBadge)
  // .get( getBadge)
  .delete(auth, admin, deleteBadge);
// .delete(deleteBadge);

router
  .route('/remove/:badge_id')
  // .post(auth,admin,removeUser)
  .post(removeUser);
module.exports = router;
