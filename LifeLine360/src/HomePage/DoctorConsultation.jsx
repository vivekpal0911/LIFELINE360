import React from 'react';
import DoctorCard from './DoctorCard.jsx';
import './DoctorConsultation.css';

const doctors = [
  {
    name: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    experience: "12 years",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Dr. Rajiv Menon",
    specialty: "Neurologist",
    experience: "15 years",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Dr. Alka Gupta",
    specialty: "Dermatologist",
    experience: "8 years",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Dr. Amit Verma",
    specialty: "General Physician",
    experience: "10 years",
    image: "https://randomuser.me/api/portraits/men/65.jpg"
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