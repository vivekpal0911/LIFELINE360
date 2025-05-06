import logo from '../assets/lifeline360.jpg'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
    <img
      src={logo}
      alt="Lifeline360 Logo"
      style={{ height: '70px', objectFit: 'contain' }}
    />

      <div className="logo">LifeLine360</div>
      <nav>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a onClick={() => navigate('/consultant')} style={{ cursor: 'pointer' }}>Consultant</a>
        <a href="#services">Services</a>
      </nav>
      <div className="nav-buttons">
        <button className="btn-outline" onClick={() => navigate('/auth')}>Log In</button>
      </div>
    </header>
  );
}
