const express = require('express');

const {createBadge,getAllBadge,updateBadge,getBadge,deleteBadge} = require('../controllers/badge.js')
const admin = require('../middleware/admin.js')
const auth = require('../middleware/auth.js')


const router = express.Router();

router
.route('/')
.post([auth],admin,createBadge)
.get([auth],getAllBadge)


router
.route('/:badge_id')
.put([auth],admin,updateBadge)
.get([auth],getBadge)
.delete([auth],admin,deleteBadge)




module.exports =router