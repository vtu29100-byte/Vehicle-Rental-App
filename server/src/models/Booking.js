import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  vehicleName: String,
  brand: String,
  image: String,
  pickupDate: String,
  returnDate: String,
  status: {
    type: String,
    default: 'Upcoming',
  },
  totalAmount: Number,
  location: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }
}, {
  timestamps: true,
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
