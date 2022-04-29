const express = require('express')

const {createVideo,getAllVideo,getVideo,updateVideo,deleteVideo} = require('../controllers/video.js')
const admin = require('../middleware/admin.js')
const auth = require('../middleware/auth.js')

const router = express.Router();

router
.route('/')
.post(createVideo)
.get(getAllVideo)

router.route('/:video_id')
.get(getVideo)
.put(updateVideo)
.delete(deleteVideo)





module.exports = router;