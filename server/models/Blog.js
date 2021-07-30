const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: [true, 'Title  is required'],
  },

  Description: {
    type: String,
    required: [true, 'Description is required'],
  },

  WrittenBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
    },
  ],

  ImgURL: {
    type: [String],
    default: '',
  },
});

BlogSchema.set('timestamps', true);

module.exports = Blog = mongoose.model('Blog', BlogSchema);
