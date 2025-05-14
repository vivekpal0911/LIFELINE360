import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Quick Links</h3>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a onClick={() => navigate('/contactus')} style={{ cursor: 'pointer', color: 'white' }}>Contact</a>
        </div>
        <div className="footer-col">
          <h3>Support</h3>
          <a href="#help">Help Center</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <div>info@lifeline360.com</div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 LifeLine360
      </div>
    </footer>
  );
} 