const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { getBlog, postBlog } = require('../controllers/blog');

router.get('/', getBlog);

router.post('/add', [auth], postBlog);

module.exports = router;
