const mongoose = require('mongoose');


const badgeSchema = new mongoose.Schema({    

    badge:{
        type:String,
    },
    description:{
        type:String,
    },
    url:{
        type:String,
    }

})
badgeSchema.set('timestamps', true);

const Badge = mongoose.model('badge',badgeSchema);
module.exports = Badge