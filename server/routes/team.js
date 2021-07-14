const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { getTeam, addTeam } = require('../controllers/team');

router.get('/', getTeam);
router.post('/add', [auth], addTeam);

module.exports = router;
