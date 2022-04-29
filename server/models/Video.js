const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    url:{
        type:String
    },
    description:{
        type:String
    },
    title:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }

})

videoSchema.set('timestamps', true);

const Video = mongoose.model('video',videoSchema);
module.exports = Video
