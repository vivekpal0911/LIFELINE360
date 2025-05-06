import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LabBooking.css'; // same styling reuse

const dummyData = {
  medicineOrders: [
    { name: 'Rahul', item: 'Paracetamol', quantity: 2 },
    { name: 'Aditi', item: 'Cough Syrup', quantity: 1 },
  ],
  labBookings: [
    { name: 'Neha', test: 'Blood Test', date: '2025-05-04' },
    { name: 'Aman', test: 'Thyroid Panel', date: '2025-05-05' },
  ],
  sampleCollections: [
    { name: 'Ravi', test: 'CBC', date: '2025-05-06', time: '10:00 AM' },
    { name: 'Priya', test: 'Liver Function', date: '2025-05-06', time: '11:30 AM' },
  ]
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('medicine');

  const renderTable = (data, columns) => (
    <table className="table">
      <thead>
        <tr>{columns.map((col, i) => <th key={i}>{col}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col, j) => <td key={j}>{row[col.toLowerCase()]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="med-container" style={{ position: 'relative' }}>
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
      <h1>Admin Dashboard</h1>

      <div style={{ marginBottom: '20px' }}>
        <button className="order-btn" onClick={() => setTab('medicine')}>Medicine Orders</button>
        <button className="order-btn" onClick={() => setTab('lab')}>Lab Bookings</button>
        <button className="order-btn" onClick={() => setTab('sample')}>Sample Collections</button>
      </div>

      {tab === 'medicine' && renderTable(dummyData.medicineOrders, ['Name', 'Item', 'Quantity'])}
      {tab === 'lab' && renderTable(dummyData.labBookings, ['Name', 'Test', 'Date'])}
      {tab === 'sample' && renderTable(dummyData.sampleCollections, ['Name', 'Test', 'Date', 'Time'])}
    </div>
  );
};

export default AdminDashboard;