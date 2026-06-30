import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  modelYear: {
    type: Number,
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  features: {
    type: [String], 
  }
}, {
  timestamps: true,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;
