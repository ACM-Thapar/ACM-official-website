const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const imageController = require('../image-app/imageController');
const upload = require('../image-app/cloudinaryUploads/multer');

const { memberProfile, getMemberById,getAllMemberProfile,updateMemberById,deleteMemberProfile } = require('../controllers/member');

const { validMemberProfile } = require('../utils/validation-checks');

router
.route('/profile')
.post(validMemberProfile,[auth], memberProfile)
.get(getAllMemberProfile)


router
.route('/profile/:_id')
.get([auth], getMemberById)
.put([auth],updateMemberById)
.delete([auth],deleteMemberProfile)

router.post(
  '/profile/addImage/:_id',
  [auth],
  upload.any(),
  imageController.createApp,
);

module.exports = router;
