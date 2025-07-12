const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all public users (for browse)
router.get('/', async (req, res) => {
  const users = await User.find({ isPublic: true, isBanned: false });
  res.json(users);
});

// Toggle profile visibility
router.put('/visibility/:id', async (req, res) => {
  const { isPublic } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { isPublic }, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update visibility' });
  }
});

module.exports = router;
