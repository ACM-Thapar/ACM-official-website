const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin= require('../middleware/admin');
const imageController = require('../image-app/imageController');
const upload = require('../image-app/cloudinaryUploads/multer');

const { getAllEvent, addEvent,updateEvent,getEvent,deleteEvent } = require('../controllers/event');

// router.get('/', getEvent);

// router.post('/add', [auth], addEvent);
router
.route('/')
.get(getAllEvent)
.post([auth],admin,addEvent) 

router
.route('/:event_id')
.put([auth],admin,updateEvent)
.get(getEvent)
.delete([auth],admin,deleteEvent);

router.post(
  '/addImage/:_id',
  [auth],
  upload.any(),
  imageController.createEventApp,
);

module.exports = router;
