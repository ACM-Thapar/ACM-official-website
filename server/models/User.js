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
});

UserSchema.set('timestamps', true);

module.exports = User = mongoose.model('user', UserSchema);
