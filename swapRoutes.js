const express = require('express');
const router = express.Router();
const Swap = require('../models/Swap');
const User = require('../models/User');

// POST request a swap
router.post('/request', async (req, res) => {
  const { senderId, receiverId } = req.body;
  const swap = new Swap({ sender: senderId, receiver: receiverId });
  await swap.save();
  res.json(swap);
});

// GET all swaps for user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const swaps = await Swap.find({ receiver: userId }).populate('sender');
  res.json(swaps);
});

// Accept swap
router.post('/accept/:id', async (req, res) => {
  const swap = await Swap.findById(req.params.id);
  swap.status = 'accepted';
  await swap.save();
  res.json(swap);
});

// Delete swap
router.delete('/:id', async (req, res) => {
  await Swap.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
