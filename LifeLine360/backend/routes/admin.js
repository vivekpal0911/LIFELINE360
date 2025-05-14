const express = require('express');
const router = express.Router();
const AdminData = require('../models/AdminData');

// GET admin dashboard data
router.get('/', async (req, res) => {
  try {
    const data = await AdminData.findOne(); // assuming one document
    if (!data) return res.status(404).json({ msg: 'No admin data found' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// POST dummy data (only once to insert)
router.post('/seed', async (req, res) => {
  try {
    const newData = new AdminData({
      medicineOrders: [
        { name: 'Rahul', item: 'Paracetamol', quantity: 2 },
        { name: 'Aditi', item: 'Cough Syrup', quantity: 1 },
      ],
      labBookings: [
        { name: 'Neha', test: 'Blood Test', date: '2025-05-04' },
        { name: 'Aman', test: 'Thyroid Panel', date: '2025-05-05' },
      ],
      sampleCollections: [
        { name: 'Ravi', test: 'CBC', date: '2025-05-06', time: '10:00 AM' },
        { name: 'Priya', test: 'Liver Function', date: '2025-05-06', time: '11:30 AM' },
      ]
    });

    await newData.save();
    res.json({ msg: 'Seeded admin data' });
  } catch (err) {
    res.status(500).json({ msg: 'Error seeding data' });
  }
});

module.exports = router;
