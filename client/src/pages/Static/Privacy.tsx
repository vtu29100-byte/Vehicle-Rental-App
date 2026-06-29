import React from 'react';
import './Static.css';

const Privacy: React.FC = () => (
  <div className="static-page container">
    <div className="static-header">
      <h1>Privacy Policy</h1>
    </div>
    <div className="static-content glass">
      <p>Last updated: June 2026</p>
      <h3>Information We Collect</h3>
      <p>We collect personal information necessary to facilitate vehicle rentals, including your name, contact details, payment information, and driving history.</p>
      <h3>How We Use It</h3>
      <p>Your data is used strictly for managing your bookings, verifying identity, and processing payments. We do not sell your data to third parties.</p>
      <h3>Data Security</h3>
      <p>We employ industry-standard encryption to protect your sensitive information during transmission and storage.</p>
    </div>
  </div>
);

export default Privacy;
