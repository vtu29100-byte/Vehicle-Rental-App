import React from 'react';
import './Static.css';

const Careers: React.FC = () => (
  <div className="static-page container">
    <div className="static-header">
      <h1>Careers at LuxeRentals</h1>
    </div>
    <div className="static-content glass">
      <p>Join a fast-paced, innovative team that is changing how people experience luxury mobility.</p>
      <h3>Current Openings</h3>
      <ul>
        <li>Senior React Engineer (Remote)</li>
        <li>Fleet Operations Manager (Mumbai)</li>
        <li>Customer Success Specialist (Delhi)</li>
      </ul>
      <p>If you're interested in joining us, please email your resume to careers@luxerentals.com.</p>
    </div>
  </div>
);

export default Careers;
