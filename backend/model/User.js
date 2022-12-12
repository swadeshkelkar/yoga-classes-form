const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    default: Date.now,
  },
  batch: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  paymentMode: {
    type: String, required: true
  }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
