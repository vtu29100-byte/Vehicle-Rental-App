import mustangImg from '../assets/images/ford_mustang.png';
import porscheImg from '../assets/images/porsche_911.png';

export const MOCK_VEHICLES = [
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
    image: mustangImg,
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
  },
  {
    id: '4',
    name: "Range Rover Sport",
    brand: "Land Rover",
    type: "suv",
    modelYear: 2023,
    pricePerDay: 12000,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["AWD", "Luxury", "7 Seats"]
  },
  {
    id: '5',
    name: "Porsche 911",
    brand: "Porsche",
    type: "car",
    modelYear: 2023,
    pricePerDay: 20000,
    image: porscheImg,
    features: ["Sports", "Turbo", "2 Seats"]
  },
  {
    id: '6',
    name: "Jeep Wrangler",
    brand: "Jeep",
    type: "suv",
    modelYear: 2022,
    pricePerDay: 9000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["4x4", "Off-road", "5 Seats"]
  },
  {
    id: '7',
    name: "BMW S1000RR",
    brand: "BMW",
    type: "bike",
    modelYear: 2023,
    pricePerDay: 7500,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["1000cc", "Superbike", "1 Seat"]
  },
  {
    id: '8',
    name: "Audi R8",
    brand: "Audi",
    type: "car",
    modelYear: 2022,
    pricePerDay: 25000,
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["V10 Engine", "AWD", "2 Seats"]
  },
  {
    id: '9',
    name: "Mercedes-Benz G-Class",
    brand: "Mercedes",
    type: "suv",
    modelYear: 2023,
    pricePerDay: 18000,
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Luxury", "Off-road", "5 Seats"]
  },
  {
    id: '10',
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    type: "bike",
    modelYear: 2022,
    pricePerDay: 2000,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["350cc", "Cruiser", "2 Seats"]
  }
];
