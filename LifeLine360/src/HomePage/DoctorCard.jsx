import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ name, specialty, experience, image }) => {
  return (
    <div className="doctor-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p><strong>Specialty:</strong> {specialty}</p>
      <p><strong>Experience:</strong> {experience}</p>
      <button>Book Appointment</button>
    </div>
  );
};

export default DoctorCard;