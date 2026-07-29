const express = require('express');
const router = express.Router();

router.get('/events', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Community Blood Drive',
      organizer: 'City Health Center',
      location: 'Downtown Plaza',
      date: '2026-08-10',
      time: '10:00 AM',
      seats: 20,
      maxSeats: 50
    }
  ]);
});

module.exports = router;
