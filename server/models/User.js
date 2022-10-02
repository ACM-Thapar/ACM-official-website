const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is empty'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  password: {
    type: String,
    required: [true, 'Password field is empty'],
    trim: true,
  },
  department: {
    type: String,
    enum: ['Designing', 'Tech', 'Em', 'Logistics', 'Marketing', 'None'],
    default: 'None',
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  about: {
    type: String,
  },
  skillSet: [
    {
      type: String,
    },
  ],
  bootcamps: [
    {
      enum: ['WebDev', 'AppDev', 'ML/AI', 'UI/UX'],
      type: String,
    },
  ],
  badges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'badge',
    },
  ],
  certificates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'certificate',
    },
  ],
  socials: [
    {
      type: String,
    },
  ],
});

UserSchema.set('timestamps', true);

module.exports = User = mongoose.model('user', UserSchema);
