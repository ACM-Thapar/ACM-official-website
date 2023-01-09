const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  ],
  GithubURL: {
    type: String,
    required: true,
  },
  Languages: [
    {
      type: String,
      default: '',
    },
  ],

  ImagesURL: [
    {
      type: String,
      default: '',
    },
  ],
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
