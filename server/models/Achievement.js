const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title field is empty'],
  },
  description: {
    type: String,
    required: [true, 'Description field is empty'],
  },
});
achievementSchema.set('timestamps', true);

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;
