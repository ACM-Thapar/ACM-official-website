const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  Month:{
    type: String,
    required: true
  },
  Day:{
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: [true, 'Name of event  is required'],
  },

  MainDescription: {
    type: String,
   
  },

  Description: {
    type: String,
    required: [true, 'Description of event  is required'],
  },
  Upcoming:{
    type:Boolean,
    required:true
  },

  ImgURL: {
    type: [String],
    default: '',
  },
});

EventSchema.set('timestamps', true);

module.exports = Event = mongoose.model('Event', EventSchema);
