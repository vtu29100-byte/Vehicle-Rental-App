import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Vehicle = sequelize.define('Vehicle', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelYear: {
    type: DataTypes.INTEGER,
  },
  pricePerDay: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  features: {
    type: DataTypes.JSON, // SQLite supports JSON data types in modern versions via Sequelize
  }
}, {
  timestamps: true,
});

export default Vehicle;
