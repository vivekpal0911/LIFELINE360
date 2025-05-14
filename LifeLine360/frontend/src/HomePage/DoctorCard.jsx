import React from 'react';
import './DoctorCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DoctorCard = ({ name, specialty, experience, icon }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-icon">
        <FontAwesomeIcon icon={icon} size="4x" color="#0684c7" />
      </div>
      <h3>{name}</h3>
      <p><strong>Specialty:</strong> {specialty}</p>
      <p><strong>Experience:</strong> {experience}</p>
      <button>Book Appointment</button>
    </div>
  );
};

export default DoctorCard;