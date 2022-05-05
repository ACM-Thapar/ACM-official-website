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
  department:{
    type:String,
    required:true,
    enum:["Designing,Tech,Em,Logistics,Marketing"]
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  }
});

UserSchema.set('timestamps', true);

module.exports = User = mongoose.model('user', UserSchema);
