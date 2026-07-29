const express = require('express');
const router = express.Router();

router.get('/emergency', (req, res) => {
  res.json([
    {
      id: 1,
      patientName: 'Aarav',
      hospital: 'City General Hospital',
      bloodGroup: 'O+',
      units: 2,
      urgency: 'Critical',
      location: 'North District',
      status: 'Open'
    }
  ]);
});

module.exports = router;
