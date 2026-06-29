import React from 'react';
import { Link } from 'react-router-dom';
import './VehicleCard.css';

interface VehicleProps {
  vehicle: {
    id: string;
    name: string;
    brand: string;
    type: string;
    pricePerDay: number;
    image: string;
    features: string[];
  }
}

const VehicleCard: React.FC<VehicleProps> = ({ vehicle }) => {
  return (
    <div className="vehicle-card">
      <div className="vehicle-img-wrapper">
        <img src={vehicle.image} alt={vehicle.name} className="vehicle-img" />
        <span className="vehicle-type">{vehicle.type.toUpperCase()}</span>
      </div>
      <div className="vehicle-info">
        <div className="vehicle-header">
          <div>
            <p className="vehicle-brand">{vehicle.brand}</p>
            <h3 className="vehicle-name">{vehicle.name}</h3>
          </div>
          <div className="vehicle-price">
            <span className="price-amount">₹{vehicle.pricePerDay.toLocaleString('en-IN')}</span>
            <span className="price-period">/day</span>
          </div>
        </div>
        
        <div className="vehicle-features">
          {vehicle.features.slice(0, 3).map((feature, idx) => (
            <span key={idx} className="feature-tag">{feature}</span>
          ))}
        </div>
        
        <Link to={`/book/${vehicle.id}`} className="btn btn-primary book-btn">Book Now</Link>
      </div>
    </div>
  );
};

export default VehicleCard;
