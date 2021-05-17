const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { memberProfile, updateMemberProfile } = require('../controllers/member');

const { validMemberProfile } = require('../utils/validation-checks');

router.post('/profile', [auth, validMemberProfile], memberProfile);

router.post('/profile/update', auth, updateMemberProfile);

module.exports = router;
