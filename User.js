const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  passwordHash: String,
  location: String,
  profilePhoto: String,
  skillsOffered: [String],
  skillsWanted: [String],
  availability: String,
  isPublic: { type: Boolean, default: true }, // ✅ Important
  isBanned: { type: Boolean, default: false },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

module.exports = mongoose.model('User', userSchema);
