import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Static.css';

const Contact: React.FC = () => (
  <div className="static-page container">
    <div className="static-header">
      <h1>Contact Us</h1>
    </div>
    <div className="static-content glass">
      <p>We're here to help! Reach out to us via any of the channels below.</p>
      
      <div className="contact-info" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Mail color="var(--primary)" />
          <span>support@luxerentals.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Phone color="var(--primary)" />
          <span>1-800-LUXE-RENT</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <MapPin color="var(--primary)" />
          <span>123 Mobility Avenue, Cyber City, Gurugram 122002</span>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
