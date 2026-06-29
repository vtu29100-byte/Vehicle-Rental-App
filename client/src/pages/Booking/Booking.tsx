import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, CreditCard, ShieldCheck, Loader2, CheckCircle } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { MOCK_VEHICLES } from '../../utils/constants';
import './Booking.css';

const Booking: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addBooking } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [generatedBookingId, setGeneratedBookingId] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  
  const vehicle = MOCK_VEHICLES.find(v => v.id === id);

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 2; // Default to 2 days if empty
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1; // Minimum 1 day
  };

  const daysCount = calculateDays();
  const calculatedTotal = vehicle ? (vehicle.pricePerDay * daysCount) : 0;
  const grandTotal = calculatedTotal + 1500; // Adding flat insurance

  if (!vehicle) {
    return <div className="container mt-2">Vehicle not found.</div>;
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network delay (2 seconds)
    setTimeout(() => {
      const newBookingId = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
      
      addBooking({
        id: newBookingId,
        vehicleName: vehicle.name,
        brand: vehicle.brand,
        image: vehicle.image,
        pickupDate: pickupDate || '2026-07-10', // fallback if empty
        returnDate: returnDate || '2026-07-12',
        status: 'Upcoming',
        totalAmount: grandTotal, 
        location: 'Main Branch'
      });
      
      setGeneratedBookingId(newBookingId);
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 2000);
  };

  if (isConfirmed) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="glass" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem 2rem', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
          <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 1.5rem auto' }} />
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Booking Confirmed!</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Your reservation for the {vehicle.name} has been successfully processed.</p>
          
          <div style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2.5rem', textAlign: 'left' }}>
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>Digital Ticket</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Booking ID</span>
                <p style={{ fontWeight: 600 }}>{generatedBookingId}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Status</span>
                <p style={{ fontWeight: 600, color: '#10b981' }}>Confirmed</p>
              </div>
              <div>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Pickup Date</span>
                <p style={{ fontWeight: 600 }}>{pickupDate || '2026-07-10'}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Amount Paid</span>
                <p style={{ fontWeight: 600 }}>₹{grandTotal.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-outline" onClick={() => window.print()}>Print Ticket</button>
            <button className="btn btn-primary" onClick={() => navigate('/my-bookings')}>View My Bookings</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page container">
      <div className="booking-header">
        <h1>Complete Your Booking</h1>
        <p>You're almost there! Review details and confirm your reservation.</p>
      </div>

      <div className="booking-content">
        <div className="booking-form-wrapper">
          <form className="booking-form" onSubmit={handleBooking}>
            <h3>Reservation Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Pickup Date</label>
                <div className="input-wrapper">
                  <Calendar size={20} className="input-icon" />
                  <input type="date" required value={pickupDate} onChange={e => setPickupDate(e.target.value)} disabled={isSubmitting} />
                </div>
              </div>
              <div className="form-group">
                <label>Return Date</label>
                <div className="input-wrapper">
                  <Calendar size={20} className="input-icon" />
                  <input type="date" required value={returnDate} onChange={e => setReturnDate(e.target.value)} disabled={isSubmitting} />
                </div>
              </div>
            </div>

            <h3 className="mt-2">Payment Information</h3>
            <div className="form-group">
              <label>Card Number</label>
              <div className="input-wrapper">
                <CreditCard size={20} className="input-icon" />
                <input type="text" placeholder="0000 0000 0000 0000" required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" required disabled={isSubmitting} />
              </div>
              <div className="form-group">
                <label>CVC</label>
                <input type="text" placeholder="123" required disabled={isSubmitting} />
              </div>
            </div>

            {isSubmitting && (
              <div className="pending-message" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginTop: '1rem', padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '0.5rem' }}>
                <Loader2 className="spinner" size={20} />
                <p>Request pending... It takes some time to confirm your booking.</p>
              </div>
            )}

            <button type="submit" className="btn btn-primary submit-booking" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Confirm & Pay'}
            </button>
          </form>
        </div>

        <div className="booking-summary-wrapper">
          <div className="booking-summary">
            <h3>Summary</h3>
            <div className="summary-item">
              <span>Vehicle:</span>
              <span>{vehicle.name}</span>
            </div>
            <div className="summary-item">
              <span>Daily Rate:</span>
              <span>₹{vehicle.pricePerDay.toLocaleString('en-IN')} x {daysCount} days</span>
            </div>
            <div className="summary-item">
              <span>Insurance:</span>
              <span>₹1,500</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-item total">
              <span>Estimated Total:</span>
              <span>₹{grandTotal.toLocaleString('en-IN')}</span>
            </div>
            
            <div className="trust-badge">
              <ShieldCheck size={24} color="var(--primary)" />
              <p>Secure SSL Encrypted Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
