import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatientDashboard = () => {
  const navigate = useNavigate();
  // Dummy user data
  const user = {
    name: 'Rohan Kumar',
    email: 'rohan.kumar@email.com',
    age: 28,
    appointments: [
      { doctor: 'Dr. Shalini', date: '2025-05-06', type: 'Telemedicine', status: 'Upcoming' },
      { doctor: 'Dr. Verma', date: '2025-04-20', type: 'Clinic', status: 'Completed' },
    ],
  };

  const handleLogout = () => {
    // Clear any auth info if needed
    navigate('/login');
  };

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      background: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      margin: '0',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 900,
        background: 'white',
        borderRadius: 18,
        padding: '40px 32px',
        boxShadow: '0 2px 16px #0002',
        margin: '32px 0',
      }}>
        <h1 style={{ color: '#0077b6', fontSize: 40, marginBottom: 32, textAlign: 'center' }}>Welcome, {user.name}!</h1>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#023e8a' }}>Profile Info</h2>
          <p style={{ fontSize: 18 }}><b>Name:</b> {user.name}</p>
          <p style={{ fontSize: 18 }}><b>Email:</b> {user.email}</p>
          <p style={{ fontSize: 18 }}><b>Age:</b> {user.age}</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, color: '#023e8a' }}>Appointments</h2>
          {user.appointments.length === 0 ? (
            <p>No appointments found.</p>
          ) : (
            <ul style={{ fontSize: 18, paddingLeft: 20 }}>
              {user.appointments.map((appt, i) => (
                <li key={i} style={{ marginBottom: 12 }}>
                  <b>Doctor:</b> {appt.doctor} | <b>Date:</b> {appt.date} | <b>Type:</b> {appt.type} | <b>Status:</b> {appt.status}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={handleLogout}
            style={{
              background: '#0077b6',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              padding: '12px 32px',
              fontSize: 18,
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 1px 4px #0001',
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard; 