const express = require('express');
const {
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
  getAnnouncement,
  //    getUserAnnouncements,
} = require('../controllers/announcement.js');
const admin = require('../middleware/admin.js');
const auth = require('../middleware/auth.js');

const router = express.Router();

// router.route('/').post([auth], admin, createAnnouncement).get(getAnnouncement);
router.route('/').post(createAnnouncement).get(getAnnouncement);

router
  .route('/:announcement_id')
  // .delete([auth], admin, deleteAnnouncement)
  .delete(deleteAnnouncement)
  // .put([auth], admin, updateAnnouncement);
  .put(updateAnnouncement);

module.exports = router;
