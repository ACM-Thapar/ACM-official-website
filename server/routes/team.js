const express = require('express');
const router = express.Router();

const { getTeam } = require('../controllers/team');

router.get('/', getTeam);

module.exports = router;
