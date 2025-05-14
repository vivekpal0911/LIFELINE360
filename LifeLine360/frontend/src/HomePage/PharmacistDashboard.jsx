import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PharmacistDashboard.css';

const samplePrescriptions = [
  {
    id: 1,
    patientName: 'Ravi Kumar',
    medicine: 'Paracetamol 500mg',
    quantity: 10,
    status: 'Pending',
  },
  {
    id: 2,
    patientName: 'Anjali Sharma',
    medicine: 'Amoxicillin 250mg',
    quantity: 20,
    status: 'Pending',
  },
];

const PharmacistDashboard = () => {
  const navigate = useNavigate();
  const [prescriptions, setPrescriptions] = useState(samplePrescriptions);

  const handleConfirm = (id) => {
    const updated = prescriptions.map((p) =>
      p.id === id ? { ...p, status: 'Fulfilled' } : p
    );
    setPrescriptions(updated);
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="pharmacist-container" style={{ position: 'relative' }}>
      <button
  onClick={() => navigate('/medicine-delivery')}
  style={{
    position: 'absolute',
    bottom: '10px',
    left: '40px',
    padding: '8px 16px',
    background: '#0077b6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }}
>
  View Delivery Dashboard
</button>

      <button
        onClick={handleExit}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '30px',
          padding: '8px 16px',
          background: '#0077b6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >Exit</button>
      <h1>Pharmacist Dashboard</h1>
      <div className="prescription-list">
        {prescriptions.map((p) => (
          <div key={p.id} className="prescription-card">
            <h3>{p.patientName}</h3>
            <p><strong>Medicine:</strong> {p.medicine}</p>
            <p><strong>Quantity:</strong> {p.quantity}</p>
            <p><strong>Status:</strong> {p.status}</p>
            {p.status === 'Pending' && (
              <button onClick={() => handleConfirm(p.id)}>Confirm Fulfillment</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharmacistDashboard;