const express = require('express');
const router = express.Router();
const User = require('../user');

router.get('/donors', async (req, res) => {
  try {
    const { bloodGroup, city, state, availability } = req.query;
    const filter = {};

    if (bloodGroup) filter.bloodGroup = bloodGroup;
    if (city) filter.city = new RegExp(city, 'i');
    if (state) filter.state = new RegExp(state, 'i');
    if (availability) filter.availability = availability;

    const donors = await User.find(filter).select('-password');
    res.json(donors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
