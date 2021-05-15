const mongoose = require('mongoose');
const validator = require('validator');

const MemberSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: [true, 'Name field is empty'],
  },

  gradYear: {
    type: Number,
    trim: true,
    required: [true, 'Graduation Year is Required'],
  },

  branch: {
    type: String,
    required: [true, 'Branch is Required'],
  },

  socialHandles: [
    {
      github: {
        type: String,
        trim: true,
      },

      LinkedIn: {
        type: String,
        trim: true,
      },

      Instagram: {
        type: String,
        trim: true,
      },

      Facebook: {
        type: String,
        trim: true,
      },

      Twitter: {
        type: String,
        trim: true,
      },

      CodeForces: {
        type: String,
        trim: true,
      },

      CodeChef: {
        type: String,
        trim: true,
      },

      HackerRank: {
        type: String,
        trim: true,
      },

      gfg: {
        type: String,
        trim: true,
      },
    },
  ],

  tagline: {
    type: String,
  },

  department: {
    type: String,
  },

  rollNo: {
    type: Number,
    required: true,
  },

  personalEmail: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },

  collegeEmail: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
});

MemberSchema.set('timestamps', true);

module.exports = Member = mongoose.model('member', MemberSchema);
