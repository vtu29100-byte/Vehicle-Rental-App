import React from 'react';
import { Users, CarFront, CalendarCheck, IndianRupee } from 'lucide-react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="admin-dashboard container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Overview of LuxeRentals operations</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon-wrapper blue">
            <Users size={24} />
          </div>
          <div>
            <h3>Total Customers</h3>
            <p className="stat-value">1,248</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper green">
            <CarFront size={24} />
          </div>
          <div>
            <h3>Active Vehicles</h3>
            <p className="stat-value">42</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper orange">
            <CalendarCheck size={24} />
          </div>
          <div>
            <h3>Active Bookings</h3>
            <p className="stat-value">18</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper purple">
            <IndianRupee size={24} />
          </div>
          <div>
            <h3>Monthly Revenue</h3>
            <p className="stat-value">₹4.5L</p>
          </div>
        </div>
      </div>

      <div className="dashboard-recent">
        <h2>Recent Bookings</h2>
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Vehicle</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#BK-7829</td>
                <td>Rahul Sharma</td>
                <td>Tesla Model S</td>
                <td><span className="badge success">Confirmed</span></td>
                <td>₹20,000</td>
              </tr>
              <tr>
                <td>#BK-7828</td>
                <td>Priya Patel</td>
                <td>Porsche 911</td>
                <td><span className="badge warning">Pending</span></td>
                <td>₹40,000</td>
              </tr>
              <tr>
                <td>#BK-7827</td>
                <td>Amit Kumar</td>
                <td>Ford Mustang</td>
                <td><span className="badge success">Confirmed</span></td>
                <td>₹16,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
