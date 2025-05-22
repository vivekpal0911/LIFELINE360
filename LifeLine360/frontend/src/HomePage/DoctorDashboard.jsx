import React, { useState } from 'react';
import { useNavigate,Routes,Route,Link,useLocation } from 'react-router-dom';
import './DoctorDashboard.css';
import PatientStatus from './PatientStatus';

export default function DoctorDashboard() {
  const navigate = useNavigate();
   const location = useLocation();

  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'Aman Verma', time: '10:00 AM', date: '2025-05-04', status:'waiting' },
    { id: 2, patient: 'Neha Singh', time: '11:30 AM', date: '2025-05-04' ,status:'waiting'},
  ]);
  
  const [filter, setFilter] = useState('all');

const markAsTreated = (id) => {
  setAppointments((prev) =>
    prev.map((appt) =>
      appt.id === id ? { ...appt, status: 'treated' } : appt
    )
  );
};

const filteredAppointments = appointments.filter((appt) => {
  if (filter === 'all') return true;
  return appt.status === filter;
});

  const handlePrescription = (patientName) => {
    alert(`Write prescription for ${patientName}`);
  };

  const handleLogout = () =>{
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');
    navigate('/auth');
  }
  const renderDashboard = location.pathname ==="/doctor";

  const treated = appointments.filter(a => a.status === 'treated').length;
const waiting = appointments.length - treated;


  return (
    <div className="doctor-container">
      <aside className="doctor-sidebar">
        <h2>Doctor Panel</h2>
        <ul>
          <li><Link to="/doctor">Dashboard</Link></li>
          <li><Link to="/doctor">Appoointments</Link></li>
          <li><Link to="/doctor/patients">Patients</Link></li>
          <li onClick={handleLogout} style={{cursor:'pointer'}}>Logout</li>
        </ul>
      </aside>

      <main className="doctor-main">
        {renderDashboard && ( 
        <>
         <section className="doctor-dashboard-welcome">
  <h1>👨‍⚕️ Welcome, Dr. Sharma</h1>
  <p>Here's an overview of today's stats and appointments.</p>

  <div className="dashboard-stats">
    <div className="stat-card">
      <h2>{appointments.length}</h2>
      <p>Total Appointments</p>
    </div>
    <div className="stat-card">
      <h2>{treated}</h2>
      <p>Treated Patients</p>
    </div>
    <div className="stat-card">
      <h2>{waiting}</h2>
      <p>Waiting Patients</p>
    </div>
  </div>
</section>

         <section className="appointment-section">
          <h2>Today's Appointments</h2>
          
    <div className="appointment-filter">
      <label htmlFor="filter">Filter:</label>
      <select id="filter" onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="waiting">Waiting</option>
        <option value="treated">Treated</option>
      </select>
    </div>

    <div className="appointment-list">
      {filteredAppointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        filteredAppointments.map((appt) => (
          <div key={appt.id} className="appointment-card">
            <h3>{appt.patient}</h3>
            <p><strong>Time:</strong> {appt.time}</p>
            <p><strong>Date:</strong> {appt.date}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: appt.status === 'treated' ? 'green' : 'orange' }}>
                {appt.status}
              </span>
            </p>
            {appt.status === 'waiting' ? (
              <button className="prescription-btn" onClick={() => markAsTreated(appt.id)}>
                Mark as Treated
              </button>
            ) : (
              <span>✔ Done</span>
            )}
          </div>
        ))
      )}
    </div>
          {appointments.length === 0 ? (
            <p>No appointments for today.</p>
          ) : (
            <table className="appointment-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id}>
                    <td>{appt.patient}</td>
                    <td>{appt.time}</td>
                    <td>{appt.date}</td>
                    <td>
                      <button className="prescription-btn" onClick={() => handlePrescription(appt.patient)}>
                        Write Prescription
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
        </>
        )};
        <Routes>
          {/* <Route path="/" element={<DoctorDashboard />} /> */}
          <Route path="/patients" element={<PatientStatus />} />
        </Routes>
      </main>
    </div>
  );
}