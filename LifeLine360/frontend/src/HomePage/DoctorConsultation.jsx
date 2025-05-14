import React from 'react';
import DoctorCard from './DoctorCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faBrain, faUserMd, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import './DoctorConsultation.css';

const doctors = [
  {
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    experience: "12 years",
    icon: faHeartbeat
  },
  {
    name: "Dr. Rajiv Menon",
    specialty: "Neurologist",
    experience: "15 years",
    icon: faBrain
  },
  {
    name: "Dr. Alka Gupta",
    specialty: "Dermatologist",
    experience: "8 years",
    icon: faUserMd
  },
  {
    name: "Dr. Amit Verma",
    specialty: "General Physician",
    experience: "10 years",
    icon: faStethoscope
  }
];

const DoctorConsultancy = () => {
  return (
    <div className="doctor-page">
      <header className="hero">
        <h1>Talk to Top Doctors</h1>
        <p>Choose from India's best certified doctors for instant consultation.</p>
      </header>
      <section className="doctor-list">
        {doctors.map((doc, index) => (
          <DoctorCard key={index} {...doc} />
        ))}
      </section>
    </div>
  );
};

export default DoctorConsultancy;