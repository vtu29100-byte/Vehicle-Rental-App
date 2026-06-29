import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Home from '../pages/Home/Home';
import Vehicles from '../pages/Vehicles/Vehicles';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Booking from '../pages/Booking/Booking';
import AdminDashboard from '../pages/Admin/Dashboard';
import MyBookings from '../pages/User/MyBookings';
import About from '../pages/Static/About';
import Careers from '../pages/Static/Careers';
import Contact from '../pages/Static/Contact';
import Terms from '../pages/Static/Terms';
import Privacy from '../pages/Static/Privacy';

const AppRoutes: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRoutes;
