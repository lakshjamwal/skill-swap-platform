const mongoose = require('mongoose');

const swapSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Swap', swapSchema);
