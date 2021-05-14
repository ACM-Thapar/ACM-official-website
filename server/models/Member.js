const mongoose = require('mongoose');
const validator = require('validator');

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is empty'],
  },

  grad_year: {
    type: Number,
    trim: true,
    required: [true, 'Graduation Year is Required'],
  },

  branch: {
    type: String,
    required: [true, 'Branch is Required'],
  },

  social_handles: [
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
    },
  ],

  tagline: {
    type: String,
  },

  department: {
    type: String,
  },

  roll_no: {
    type: Number,
    required: true,
  },

  personal_email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },

  college_email: {
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

UserSchema.set('timestamps', true);

module.exports = Member = mongoose.model('member', MemberSchema);
