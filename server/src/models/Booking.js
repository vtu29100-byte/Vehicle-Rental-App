import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  vehicleName: DataTypes.STRING,
  brand: DataTypes.STRING,
  image: DataTypes.STRING,
  pickupDate: DataTypes.STRING,
  returnDate: DataTypes.STRING,
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Upcoming',
  },
  totalAmount: DataTypes.INTEGER,
  location: DataTypes.STRING,
  userId: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  timestamps: true,
});

export default Booking;
