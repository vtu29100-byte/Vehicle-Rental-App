import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/database.js';
import Vehicle from '../models/Vehicle.js';
import User from '../models/User.js';

dotenv.config();

const mockVehicles = [
  {
    name: "Tesla Model S",
    brand: "Tesla",
    type: "car",
    modelYear: 2023,
    pricePerDay: 120,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Electric", "Autopilot", "5 Seats"],
    location: "New York"
  },
  {
    name: "Ford Mustang",
    brand: "Ford",
    type: "car",
    modelYear: 2022,
    pricePerDay: 95,
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["V8 Engine", "Convertible", "4 Seats"],
    location: "Los Angeles"
  },
  {
    name: "Harley Davidson Iron 883",
    brand: "Harley Davidson",
    type: "bike",
    modelYear: 2021,
    pricePerDay: 50,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["883cc", "Cruiser", "2 Seats"],
    location: "Chicago"
  },
  {
    name: "Range Rover Sport",
    brand: "Land Rover",
    type: "suv",
    modelYear: 2023,
    pricePerDay: 150,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["AWD", "Luxury", "7 Seats"],
    location: "Miami"
  }
];

const importData = async () => {
  try {
    await connectDB();
    await Vehicle.deleteMany();
    await User.deleteMany();

    await Vehicle.insertMany(mockVehicles);
    
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

importData();
