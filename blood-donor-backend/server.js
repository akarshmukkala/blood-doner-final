const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/routes/api'));

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/blood_donor_db';
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('MongoDB Connected');
    // Dev: seed a default test user when DB is empty to allow login during local development
    if (process.env.NODE_ENV !== 'production') {
      try {
        const User = require('./user');
        const count = await User.countDocuments();
        if (count === 0) {
          await User.create({
            name: 'Test User',
            email: 'test@local',
            password: 'password123',
            bloodGroup: 'A+'
          });
          console.log('Seeded test user: test@local / password123');
        }
      } catch (seedErr) {
        console.error('User seed error:', seedErr);
      }
    }
  })
  .catch(err => console.error('DB Connection Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));