import React, { useState } from 'react';
import './DoctorDashboard.css';

export default function PatientStatus() {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'Aman Verma', status: 'waiting' },
    { id: 2, patient: 'Neha Singh', status: 'treated' },
    { id: 3, patient: 'Ravi Kumar', status: 'waiting' },
  ]);

  const treated = appointments.filter(p => p.status === 'treated').length;
  const waiting = appointments.length - treated;

  const handleStatusChange = (id) => {
    setAppointments(prev =>
      prev.map(p => p.id === id ? { ...p, status: 'treated' } : p)
    );
  };

  return (
    <div>
      <h2>Patient Status</h2>
      <div className="doctor-stats">
        <div>Total Patients: <strong>{appointments.length}</strong></div>
        <div>Treated: <strong>{treated}</strong></div>
        <div>Waiting: <strong>{waiting}</strong></div>
      </div>

      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(p => (
            <tr key={p.id}>
              <td>{p.patient}</td>
              <td style={{ color: p.status === 'treated' ? 'green' : 'orange' }}>
                {p.status}
              </td>
              <td>
                {p.status === 'waiting' ? (
                  <button className="prescription-btn" onClick={() => handleStatusChange(p.id)}>
                    Mark as Treated
                  </button>
                ) : (
                  <span>✔ Done</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
