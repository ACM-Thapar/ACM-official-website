const express = require('express');

const {
  createBadge,
  getAllBadge,
  updateBadge,
  getBadge,
  deleteBadge,
} = require('../controllers/badge.js');
const admin = require('../middleware/admin.js');
const auth = require('../middleware/auth.js');

const router = express.Router();

router
  .route('/')
  // .post(auth,admin,createBadge)
  .post(createBadge)
  // .get(auth,getAllBadge)
  .get(getAllBadge);

router
  .route('/:badge_id')
  //   .put(auth, admin, updateBadge)
  .get(auth, getBadge)
  .put(updateBadge)
  //   .delete(auth, admin, deleteBadge);
  .delete(deleteBadge);

module.exports = router;
