import { connectDB } from '../config/database.js';
import Vehicle from '../models/Vehicle.js';

const MOCK_VEHICLES = [
  {
    id: '1',
    name: "Tesla Model S",
    brand: "Tesla",
    type: "car",
    modelYear: 2023,
    pricePerDay: 10000,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Electric", "Autopilot", "5 Seats"]
  },
  {
    id: '2',
    name: "Ford Mustang",
    brand: "Ford",
    type: "car",
    modelYear: 2022,
    pricePerDay: 8000,
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["V8 Engine", "Convertible", "4 Seats"]
  },
  {
    id: '3',
    name: "Harley Davidson Iron 883",
    brand: "Harley Davidson",
    type: "bike",
    modelYear: 2021,
    pricePerDay: 4000,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["883cc", "Cruiser", "2 Seats"]
  }
];

const seedDB = async () => {
  try {
    await connectDB();
    console.log('Seeding Database...');
    await Vehicle.deleteMany(); // Clear existing
    await Vehicle.insertMany(MOCK_VEHICLES);
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error.message);
    process.exit(1);
  }
};

seedDB();
