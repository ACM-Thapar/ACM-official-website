const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const imageController = require('../image-app/imageController');
const upload = require('../image-app/cloudinaryUploads/multer');

const { memberProfile, getMemberById } = require('../controllers/member');

const { validMemberProfile } = require('../utils/validation-checks');

router.post('/profile', [auth, validMemberProfile], memberProfile);
router.get('/profile/:_id', [auth], getMemberById);
router.post(
  '/profile/addImage/:_id',
  [auth],
  upload.any(),
  imageController.createApp,
);

module.exports = router;
