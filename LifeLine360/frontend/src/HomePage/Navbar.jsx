import logo from '../assets/Logo.png'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => setMenuOpen((open) => !open);
  const handleNavClick = (cb) => {
    setMenuOpen(false);
    cb && cb();
  };

  return (
    <header className={`navbar${menuOpen ? ' open' : ''}`}>
      <img
        src={logo}
        alt="Lifeline Logo"
      />
      <div className="logo">LifeLine360</div>
      <button className="hamburger" onClick={handleHamburgerClick} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav>
        <a href="/" onClick={() => handleNavClick()}>Home</a>
        <a onClick={() => handleNavClick(() => navigate('/about'))} style={{ cursor: 'pointer' }}>About</a>
        <a onClick={() => handleNavClick(() => navigate('/consultant'))} style={{ cursor: 'pointer' }}>Consultant</a>
        <a onClick={() => handleNavClick(() => navigate('/services'))} style={{ cursor: 'pointer' }}>Services</a>
      </nav>
      <div className="nav-buttons">
        <button className="btn-outline" onClick={() => handleNavClick(() => navigate('/auth'))}>Log In</button>
      </div>
    </header>
  );
}
