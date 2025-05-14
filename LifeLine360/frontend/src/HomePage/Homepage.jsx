import ContactUs from './ContactUs';
import React from 'react';
import './Homepage.css';
import {useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faPills, faVial, faNotesMedical, faCapsules, faHospital, faAmbulance, faClock, faShieldAlt, faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function HomePage() {
  const navigate =useNavigate();

  const handleGetStarted = () => {
    navigate('/auth');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };
  
    
  return (
    <div>
       
      {/* Hero Section */}
      <section className="hero-split">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <span style={{ color: '#0077b6', fontWeight: 700 }}>Complete <span style={{ textShadow: '1px 1px 0 #caf0f8' }}>360° solution</span> for modern healthcare</span>
          </h1>
          <p style={{ margin: '18px 0 32px 0', fontSize: 18, color: '#555' }}>
            Connecting patients, doctors, pharmacies, and labs on one platform.
          </p>
          <div className="hero-buttons">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleGetStarted}
            >
              Get Started
            </motion.button>
            <motion.button
              className="btn-outline"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLearnMore}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&w=600"
            alt="Doctor"
            className="hero-doctor-img"
            animate={{ y: [0, -20, 0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <div className="highlight-card">
          <span role="img" aria-label="doctor">👨‍⚕️</span>
          <h4>100+ Certified Doctors</h4>
          <p>India's best specialists at your service</p>
        </div>
        <div className="highlight-card">
          <span role="img" aria-label="clock">⏰</span>
          <h4>24x7 Support</h4>
          <p>Anytime, anywhere healthcare help</p>
        </div>
        <div className="highlight-card">
          <span role="img" aria-label="shield">🛡️</span>
          <h4>Secure & Private</h4>
          <p>Your data is safe and encrypted</p>
        </div>
        <div className="highlight-card">
          <span role="img" aria-label="truck">🚑</span>
          <h4>Fast Medicine Delivery</h4>
          <p>Doorstep delivery in 2 hours</p>
        </div>
      </section>

      {/* About Section */}
      {/* About section moved to About.jsx */}

      {/* Services */}
      {/* Services section moved to Services.jsx */}

      {/* Testimonials */}
      <section className="testimonial" id='about'>
        <h2>Testimonials</h2>
        <blockquote>
          "LifeLine360* is a healthcare website designed to solve major problems in the medical field.
          It connects doctors, medical stores, pharmacists, and patients on one platform."
        </blockquote>
      </section>

      

      {/* Footer */}
      {/* Removed duplicate static footer. Use only <Footer /> from App.jsx */}
    </div>
  );
}