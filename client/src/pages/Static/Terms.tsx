import React from 'react';
import './Static.css';

const Terms: React.FC = () => (
  <div className="static-page container">
    <div className="static-header">
      <h1>Terms of Service</h1>
    </div>
    <div className="static-content glass">
      <p>Last updated: June 2026</p>
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing and using LuxeRentals, you agree to be bound by these Terms of Service.</p>
      <h3>2. Rental Policies</h3>
      <p>All renters must hold a valid driver's license and be at least 21 years of age. Insurance coverage is mandatory for all rentals.</p>
      <h3>3. Cancellations</h3>
      <p>Cancellations made within 48 hours of the pickup date are subject to a 50% cancellation fee.</p>
    </div>
  </div>
);

export default Terms;
