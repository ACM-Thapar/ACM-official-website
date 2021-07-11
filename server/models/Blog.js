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
      ref: 'member',
    },
  ],
});

BlogSchema.set('timestamps', true);

module.exports = mongoose.model('blog', BlogSchema);
