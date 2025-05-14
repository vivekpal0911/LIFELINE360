import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faPills, faVial, faNotesMedical, faCapsules, faHospital, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import './Homepage.css';

export default function Services() {
  const navigate = useNavigate();
  return (
    <section className="services" id="services">
      <div className="service-card" onClick={() => navigate('/doctor')}>
        <div className="service-icon"><FontAwesomeIcon icon={faUserMd} size="3x" color="#0684c7" /></div>
        <h3>Doctor Dashboard</h3>
        <p>Book online or in-person consultations</p>
      </div>
      <div className="service-card" onClick={() => navigate('/medicine-ordering')}>
        <div className="service-icon"><FontAwesomeIcon icon={faPills} size="3x" color="#0684c7" /></div>
        <h3>Medicine Ordering</h3>
        <p>Order medicines from your nearby pharmacy</p>
      </div>
      <div className="service-card" onClick={() => navigate('/lab-booking')}>
        <div className="service-icon"><FontAwesomeIcon icon={faVial} size="3x" color="#0684c7" /></div>
        <h3>Lab Test Booking</h3>
        <p>Book and manage pathology lab tests</p>
      </div>
      <div className="service-card" onClick={() => navigate('/patient-dashboard')}>
        <div className="service-icon"><FontAwesomeIcon icon={faNotesMedical} size="3x" color="#0684c7" /></div>
        <h3>Patient Dashboard</h3>
        <p>Manage medical history and appointments</p>
      </div>
      <div className="service-card" onClick={() => navigate('/pharmacist-dashboard')}>
        <div className="service-icon"><FontAwesomeIcon icon={faCapsules} size="3x" color="#0684c7" /></div>
        <h3>Pharmacist Dashboard</h3>
        <p>Manage medicine stock and import-export History</p>
      </div>
      <div className="service-card" onClick={() => navigate('/admin-dashboard')}>
        <div className="service-icon"><FontAwesomeIcon icon={faHospital} size="3x" color="#0684c7" /></div>
        <h3>Admin Dashboard</h3>
        <p>View and Manage all things related to Website</p>
      </div>
      <div className="service-card" onClick={() => navigate('/emergency-dashboard')}>
        <div className="service-icon"><FontAwesomeIcon icon={faAmbulance} size="3x" color="#0684c7" /></div>
        <h3>Emergency Dashboard</h3>
        <p>Fast response and Manage related to emergency</p>
      </div>
      <div className="service-card" onClick={() => navigate('/consultant')}>
        <div className="service-icon"><FontAwesomeIcon icon={faUserMd} size="3x" color="#0684c7" /></div>
        <h3>Doctor Consultancy</h3>
        <p>Book online or in-person consultations</p>
      </div>
    </section>
  );
} 