const mongoose = require('mongoose');
const validator = require('validator');

const TeamSchema = new mongoose.Schema({
  President: [
    {
      type: Schema.Types.ObjectId,
      ref: 'member',
    },
  ],

  SocietyHead: [
    {
      type: Schema.Types.ObjectId,
      ref: 'member',
    },
  ],

  DepartmentHead: [
    {
      type: Schema.Types.ObjectId,
      ref: 'member',
    },
  ],
});

module.exports = Team = mongoose.model('team', TeamSchema);
