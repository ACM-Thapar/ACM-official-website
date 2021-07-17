const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  President: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
    },
  ],

  SocietyHead: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
    },
  ],

  DepartmentHead: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
    },
  ],
});

module.exports = Team = mongoose.model('Team', TeamSchema);
