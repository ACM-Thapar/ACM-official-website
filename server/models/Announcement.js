const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, 'Heading field is empty'],
  },
  type: {
    type: String,
    enum: ['Meet', 'Technical', 'Informational', 'Event'],
    default: 'Meet',
  },
  content: {
    type: String,
  },
  year: {
    type: String,
    default: 'ALL',
  },
});
announcementSchema.set('timestamps', true);

const Announcement = mongoose.model('Announcement', announcementSchema);
module.exports = Announcement;
