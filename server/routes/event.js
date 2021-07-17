const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { getEvent, addEvent } = require('../controllers/event');

router.get('/', getEvent);

router.post('/add', [auth], addEvent);

module.exports = router;
