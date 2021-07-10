const mongoose = require('mongoose');
const validator = require('validator');

const BlogSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: [true, 'Title  is required'],
  },

  Description: {
    type: String,
    required: [true, 'Description is required'],
  },
});

BlogSchema.set('timestamps', true);

module.exports = User = mongoose.model('event', BlogSchema);
