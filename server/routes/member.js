const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { memberProfile } = require('../controllers/member');

router.post('/profile', auth, memberProfile);

module.exports = router;
