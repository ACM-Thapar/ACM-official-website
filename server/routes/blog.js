const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const imageController = require('../image-app/imageController');
const upload = require('../image-app/cloudinaryUploads/multer');

const { getBlog, postBlog } = require('../controllers/blog');

router.get('/', getBlog);

router.post('/add', [auth], postBlog);

router.post(
  '/addImage/:_id',
  [auth],
  upload.any(),
  imageController.createBlogApp,
);

module.exports = router;
