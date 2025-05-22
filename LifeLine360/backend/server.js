const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'https://lifeline360-1.onrender.com', // Deployed frontend
    'http://localhost:5173', // Local dev
    'http://localhost'
  ],
  credentials: true
}));
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'Something went wrong!', error: err.message, stack: err.stack });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lifeline360')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Test Route
app.get('/', (req, res) => {
  res.send('✅ Lifeline360 API is running!');
});

const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);

const port = process.env.PORT || 5000;

// ✅ Register User
app.post('/api/register', async (req, res) => {
  let { name, phone, email, password, role, appointments, prescriptions, history } = req.body;

  // Parse if sent as string
  if (typeof appointments === 'string') {
    try { appointments = JSON.parse(appointments); } catch (e) { appointments = []; }
  }
  if (typeof prescriptions === 'string') {
    try { prescriptions = JSON.parse(prescriptions); } catch (e) { prescriptions = []; }
  }
  if (typeof history === 'string') {
    try { history = JSON.parse(history); } catch (e) { history = []; }
  }

  // Check for missing fields
  if (!name || !phone || !email || !password || !role) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: 'User already exists' });

    const newUser = new User({
      name,
      phone,
      email,
      password,
      role,
      appointments,
      prescriptions,
      history
    });

    await newUser.save();
    res.status(201).json({ msg: 'Registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    // If it's a mongoose validation error, show the message
    if (err.name === 'ValidationError') {
      return res.status(400).json({ msg: err.message });
    }
    res.status(500).json({ msg: 'Error registering user' });
  }
});

// ✅ Login User
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password)
      return res.status(401).json({ msg: 'Invalid credentials' });

    res.json({ msg: 'Login successful', role: user.role, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error logging in' });
  }
});

// ✅ Fetch Dashboard Data
app.get('/api/patient/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json({
      name: user.name,
      appointments: user.appointments,
      prescriptions: user.prescriptions,
      history: user.history
    });
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching data' });
  }
});

// ✅ Update Patient Dashboard Data (optional route)
app.put('/api/patient/:email', async (req, res) => {
  const { email } = req.params;
  let { appointments, prescriptions, history } = req.body;

  // Fix: Parse if sent as string
  if (typeof appointments === 'string') {
    try { appointments = JSON.parse(appointments); } catch (e) { appointments = []; }
  }
  if (typeof prescriptions === 'string') {
    try { prescriptions = JSON.parse(prescriptions); } catch (e) { prescriptions = []; }
  }
  if (typeof history === 'string') {
    try { history = JSON.parse(history); } catch (e) { history = []; }
  }

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { $set: { appointments, prescriptions, history } },
      { new: true }
    );

    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json({ msg: 'Dashboard data updated successfully', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error updating data' });
  }
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
