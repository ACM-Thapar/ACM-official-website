const mongoose = require('mongoose');
const validator = require('validator');

const TeamSchema = new mongoose.Schema({
  President: {
    type: [String],
    required: [true, 'President field cannot be empty'],
  },

  SocietyHead: {
    type: [String],
    required: [true, 'SocietyHead field cannot be empty'],
  },

  DepartmentHead: {
    type: [String],
    required: [true, 'DepartmentHead field cannot be empty'],
  },
});

module.exports = Team = mongoose.model('team', TeamSchema);
