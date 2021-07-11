const express = require('express');
const router = express.Router();

const { getBlog } = require('../controllers/blog');

router.get('/', getBlog);

module.exports = router;
