const express = require('express')

const app = express();
const {createVideo} = require('../controllers/video.js')


const router = express.Router();

router
.route('/')
.post(createVideo)
.get(getAllVideo)

router.route('/:video_id')
.get(getVideo)






module.exports = router;