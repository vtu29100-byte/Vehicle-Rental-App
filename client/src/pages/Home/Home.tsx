import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, MapPin, Zap } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-content">
          <h1>Experience the Drive of Your Life</h1>
          <p>Premium vehicles for every occasion. Book instantly, drive beautifully.</p>
          <div className="hero-actions">
            <Link to="/vehicles" className="btn btn-primary hero-btn">
              Explore Vehicles <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="features container">
        <div className="feature-card">
          <ShieldCheck size={40} className="feature-icon" />
          <h3>Fully Insured</h3>
          <p>Drive with peace of mind knowing you're fully covered.</p>
        </div>
        <div className="feature-card">
          <MapPin size={40} className="feature-icon" />
          <h3>Anywhere Delivery</h3>
          <p>We deliver your vehicle to your doorstep or airport.</p>
        </div>
        <div className="feature-card">
          <Zap size={40} className="feature-icon" />
          <h3>Instant Booking</h3>
          <p>No waiting in lines. Book and go in minutes.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
