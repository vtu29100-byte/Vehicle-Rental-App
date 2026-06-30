import express from 'express';
import cors from 'cors';
import Vehicle from './models/Vehicle.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

// Simple route to get vehicles from MongoDB
app.get('/api/vehicles', async (req, res) => {
  try {
    const vehicles = await Vehicle.find({});
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default app;
