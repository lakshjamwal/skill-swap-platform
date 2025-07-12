const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');


const authRoutes = require('./routes/authRoutes');
const swapRoutes = require('./routes/swapRoutes'); // ✅ NEW LINE

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

mongoose.connect('mongodb://localhost:27017/skillswap')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/swaps', swapRoutes); // ✅ NEW LINE

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
