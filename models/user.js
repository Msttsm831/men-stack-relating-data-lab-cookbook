const mongoose = require('mongoose');

const foodsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
}});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: [foodsSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
