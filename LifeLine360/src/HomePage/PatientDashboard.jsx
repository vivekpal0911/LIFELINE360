
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './PatientDashboard.css';
 
 

const PatientDashboard = () => {
  const navigate = useNavigate();
  const user = {
    name: "Rohan Kumar",
    appointments: [
      { doctor: "Dr. Shalini", date: "2025-05-06", type: "Telemedicine", status: "Upcoming" },
    ],
    prescriptions: [
      { medicine: "Paracetamol", refill: "Available", pharmacy: "Apollo", delivery: "Scheduled" },
    ],
    history: [
      { test: "Blood Test", date: "2025-04-20", result: "Normal" },
      { test: "ECG", date: "2025-03-15", result: "Needs review" },
    ]
  };
  
  const handleExit = () => {
    navigate('/');
  };

  return (
    <motion.div 
      className="dashboard-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      
      <h1>Welcome, {user.name}</h1>
      <section>
        <h2>Appointments</h2>
        <div className="card-container">
          {user.appointments.map((item, i) => (
            <motion.div className="card" key={i} whileHover={{ scale: 1.05 }}>
              <p><strong>Doctor:</strong> {item.doctor}</p>
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Type:</strong> {item.type}</p>
              <p><strong>Status:</strong> {item.status}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2>Prescriptions & Refills</h2>
        <div className="card-container">
          {user.prescriptions.map((item, i) => (
            <motion.div className="card" key={i} whileHover={{ scale: 1.05 }}>
              <p><strong>Medicine:</strong> {item.medicine}</p>
              <p><strong>Refill:</strong> {item.refill}</p>
              <p><strong>Pharmacy:</strong> {item.pharmacy}</p>
              <p><strong>Delivery:</strong> {item.delivery}</p>
            </motion.div>
          ))}
        </div>
      </section>
          <p style={{color:"red"}}>Debug Test</p>
      <section>
        <h2>Medical History</h2>
        <div className="card-container">
          {user.history.map((item, i) => (
            <motion.div className="card" key={i} whileHover={{ scale: 1.05 }}>
              <p><strong>Test:</strong> {item.test}</p>
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Result:</strong> {item.result}</p>
            </motion.div>
          ))}
        </div>
        <div className="med-container" style={{ position: 'relative' }}>
        <button
    onClick={() => navigate('/my-reports')}
    style={{
    position: 'absolute',
    bottom: '-30px',
    left: '20px',
    padding: '8px 16px',
    background: '#0077b6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }}
>
  Next
</button>
       <button
        onClick={handleExit}
        style={{
          position: 'absolute',
          bottom: '-30px',
          right: '20px',
          padding: '8px 16px',
          background: '#0077b6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >Exit</button>
      </div>
      </section>
    </motion.div>
    
  );
};

export default PatientDashboard;