const router = require('express').Router();
const User = require('../../user');

// Search Donors
router.get('/donors', async (req, res) => {
  try {
    const { bloodGroup, city, state, availability } = req.query;
    let filter = {};

    if (bloodGroup) filter.bloodGroup = bloodGroup;
    if (city) filter.city = new RegExp(city, 'i');
    if (state) filter.state = new RegExp(state, 'i');
    if (availability) filter.availability = availability;

    const donors = await User.find(filter).select('-password');
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
