import React, { useState } from 'react';
import VehicleCard from '../../components/vehicles/VehicleCard';
import { MOCK_VEHICLES } from '../../utils/constants';
import './Vehicles.css';

const Vehicles: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredVehicles = filter === 'all' 
    ? MOCK_VEHICLES 
    : MOCK_VEHICLES.filter(v => v.type === filter);

  return (
    <div className="vehicles-page container">
      <div className="vehicles-header">
        <h1>Our Fleet</h1>
        <p>Choose from our diverse collection of premium vehicles.</p>
        
        <div className="filter-tabs">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >All</button>
          <button 
            className={`filter-btn ${filter === 'car' ? 'active' : ''}`}
            onClick={() => setFilter('car')}
          >Cars</button>
          <button 
            className={`filter-btn ${filter === 'suv' ? 'active' : ''}`}
            onClick={() => setFilter('suv')}
          >SUVs</button>
          <button 
            className={`filter-btn ${filter === 'bike' ? 'active' : ''}`}
            onClick={() => setFilter('bike')}
          >Bikes</button>
        </div>
      </div>

      <div className="vehicles-grid">
        {filteredVehicles.map(vehicle => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
      
      {filteredVehicles.length === 0 && (
        <div className="empty-state">
          <h3>No vehicles found</h3>
          <p>Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
};

export default Vehicles;
