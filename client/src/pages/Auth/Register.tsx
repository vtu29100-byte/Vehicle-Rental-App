import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CarFront, Mail, Lock, User as UserIcon } from 'lucide-react';
import '../Auth/Login.css'; // Reusing the same auth styles
import './Register.css'; // Specific register overrides if any

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock register success
    alert('Account created successfully! (Mock)');
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-container glass">
        <div className="auth-header">
          <CarFront size={40} color="var(--primary)" />
          <h2>Create an Account</h2>
          <p>Join LuxeRentals for premium vehicle access.</p>
        </div>

        <form onSubmit={handleRegister} className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <div className="input-wrapper">
              <UserIcon size={20} className="input-icon" />
              <input type="text" placeholder="John Doe" required />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <Mail size={20} className="input-icon" />
              <input type="email" placeholder="you@example.com" required />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input type="password" placeholder="••••••••" required />
            </div>
          </div>
          
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input type="password" placeholder="••••••••" required />
            </div>
          </div>

          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" required /> I agree to the Terms and Conditions
            </label>
          </div>

          <button type="submit" className="btn btn-primary auth-submit">Sign Up</button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
