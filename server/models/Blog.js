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
      type: Schema.Types.ObjectId,
      ref: 'Member',
    },
  ],
});

BlogSchema.set('timestamps', true);

module.exports = mongoose.model('blog', BlogSchema);
