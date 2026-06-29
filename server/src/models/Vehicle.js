import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  type: { type: String, required: true, enum: ['car', 'bike', 'suv'] },
  modelYear: { type: Number, required: true },
  pricePerDay: { type: Number, required: true },
  image: { type: String, required: true },
  features: [{ type: String }],
  isAvailable: { type: Boolean, default: true },
  location: { type: String, required: true }
}, {
  timestamps: true
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;
