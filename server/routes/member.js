const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { memberProfile } = require('../controllers/member');

const { validMemberProfile } = require('../utils/validation-checks');

router.post('/profile', [auth, validMemberProfile], memberProfile);

module.exports = router;
