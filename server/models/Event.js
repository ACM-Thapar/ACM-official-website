const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  StartDate: {
    type: Date,
    required: [true, 'Start Date of event is required'],
  },

  EndDate: {
    type: Date,
    required: [true, 'End Date of event is required'],
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

module.exports = Event = mongoose.model('Event', EventSchema);
