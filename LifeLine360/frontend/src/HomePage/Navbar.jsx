import logo from '../assets/Logo.png'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
    <img
      src={logo}
      alt="Lifeline Logo"
      style={{ height: '70px', objectFit: 'contain' ,backgroundColor:'white',borderRadius:'50%' }}
    />

      <div className="logo">LifeLine360</div>
      <nav>
        <a href="/">Home</a>
        <a onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>About</a>
        {/* <a href="#consultant">Consultant</a> */}
        <a onClick={() => navigate('/consultant')} style={{ cursor: 'pointer' }}>Consultant</a>
        <a onClick={() => navigate('/services')} style={{ cursor: 'pointer' }}>Services</a>
      </nav>
      <div className="nav-buttons">
        <button className="btn-outline" onClick={() => navigate('/auth')}>Log In</button>
      </div>
    </header>
  );
}
