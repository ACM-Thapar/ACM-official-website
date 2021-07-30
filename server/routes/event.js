const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const imageController = require('../image-app/imageController');
const upload = require('../image-app/cloudinaryUploads/multer');

const { getEvent, addEvent } = require('../controllers/event');

router.get('/', getEvent);

router.post('/add', [auth], addEvent);

router.post(
  '/addImage/:_id',
  [auth],
  upload.any(),
  imageController.createEventApp,
);

module.exports = router;
