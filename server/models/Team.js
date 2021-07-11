const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  President: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'member',
    },
  ],

  SocietyHead: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'member',
    },
  ],

  DepartmentHead: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'member',
    },
  ],
});

module.exports = Team = mongoose.model('Team', TeamSchema);
