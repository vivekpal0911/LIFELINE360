 

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './EmergencyDashboard.css';



const emergencyServices = [
  {
    title: "Ambulance Service",
    description: "24/7 ambulance support for emergencies.",
    image: "https://randomuser.me/api/portraits/lego/1.jpg", // Ambulance-style
    phone: "102"
  },
  {
    title: "Fire Emergency",
    description: "Instant contact with fire department.",
    image: "https://randomuser.me/api/portraits/lego/2.jpg", // Fire-truck style
    phone: "101"
  },
  {
    title: "Emergency Room (ER)",
    description: "Access to emergency hospital rooms.",
    image: "https://randomuser.me/api/portraits/lego/3.jpg", // Hospital-like style
    phone: "108"
  },
  {
    title: "Disaster Response",
    description: "Contact disaster relief teams.",
    image: "https://randomuser.me/api/portraits/lego/4.jpg", // Rescue team-like style
    phone: "112"
  }
];
// const navigate = useNavigate(); 
// const handleExit = () => { //
//   navigate('/');
// };

const EmergencyDashboard = () => {
  return (
    <div className="emergency-page">
      {/* <button
        onClick={handleExit}
        className="admin-exit-btn"
      >Exit</button> */}
      <header className="hero">
        <h1>Emergency Services</h1>
        <p>Quick access to essential emergency support.</p>
      </header>

      <section className="emergency-list">
        {emergencyServices.map((service, index) => (
          <motion.div
            key={index}
            className="emergency-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={service.image} alt={service.title} className="emergency-img" />
            <div className="emergency-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={`tel:${service.phone}`} className="call-btn">Call {service.phone}</a>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
 

export default EmergencyDashboard;

