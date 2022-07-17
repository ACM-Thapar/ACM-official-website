const express = require('express');

const {
  createVideo,
  getAllVideo,
  getVideo,
  updateVideo,
  deleteVideo,
} = require('../controllers/video.js');
const admin = require('../middleware/admin.js');
const auth = require('../middleware/auth.js');

const router = express.Router();

router
  .route('/')
  // .post(auth, admin,createVideo)
  .post(createVideo)
  //   .get(auth, admin,getAllVideo)
  .get(getAllVideo);

router
  .route('/:video_id')
  .get(getVideo)
  //   .put(auth, admin, updateVideo)
  .put(updateVideo)
  //   .delete(auth, admin, deleteVideo);
  .delete(deleteVideo);

module.exports = router;
