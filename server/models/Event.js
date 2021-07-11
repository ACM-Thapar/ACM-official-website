const mongoose = require('mongoose');
const validator = require('validator');

const EventSchema = new mongoose.Schema({
  DateOfEvent: {
    type: Date,
    required: [true, 'Date of event is required'],
  },

  Time: {
    type: String,
    required: [true, 'Time of event is required'],
  },

  Name: {
    type: String,
    required: [true, 'Name of event  is required'],
  },

  Description: {
    type: String,
    required: [true, 'Description of event  is required'],
  },
});

EventSchema.set('timestamps', true);

module.exports = Event = mongoose.model('event', EventSchema);
