const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // For local login
  googleId: String, // For Google OAuth
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
