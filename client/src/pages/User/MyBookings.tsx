import React from 'react';
import { Calendar, MapPin, IndianRupee, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { useAuth } from '../../context/AuthContext';
import './MyBookings.css';

const MyBookings: React.FC = () => {
  const { bookings, cancelBooking } = useBooking();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <Lock size={64} color="var(--text-muted)" style={{ margin: '0 auto 1.5rem auto' }} />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Authentication Required</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Please log in to view your booking history.</p>
        <Link to="/login" className="btn btn-primary">Go to Login</Link>
      </div>
    );
  }

  return (
    <div className="my-bookings-page container">
      <div className="bookings-header">
        <h1>My Booking History</h1>
        <p>View your past and upcoming reservations.</p>
      </div>

      <div className="bookings-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <div className="booking-img-wrapper">
              <img src={booking.image} alt={booking.vehicleName} />
            </div>
            
            <div className="booking-details">
              <div className="booking-header-row">
                <div>
                  <span className="brand">{booking.brand}</span>
                  <h3>{booking.vehicleName}</h3>
                </div>
                <span className={`status-badge ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </div>

              <div className="booking-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{booking.pickupDate} to {booking.returnDate}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{booking.location}</span>
                </div>
                <div className="meta-item">
                  <IndianRupee size={16} />
                  <span>₹{booking.totalAmount.toLocaleString('en-IN')} Total</span>
                </div>
              </div>
              
              <div className="booking-actions">
                <button className="btn btn-outline">View Details</button>
                {booking.status === 'Upcoming' && (
                  <button 
                    className="btn btn-outline" 
                    style={{ color: '#ef4444', borderColor: '#ef4444' }}
                    onClick={() => cancelBooking(booking.id)}
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
