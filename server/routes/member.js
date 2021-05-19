const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { memberProfile, getMemberById } = require('../controllers/member');

const { validMemberProfile } = require('../utils/validation-checks');

router.post('/profile', [auth, validMemberProfile], memberProfile);
router.get('/profile/:_id', [auth], getMemberById);

module.exports = router;
