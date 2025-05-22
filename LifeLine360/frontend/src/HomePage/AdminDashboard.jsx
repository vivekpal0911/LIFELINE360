import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LabBooking.css'; // Assuming you're using this for styling

const apiUrl = import.meta.env.VITE_API_URL;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('medicine');
  const [data, setData] = useState({
    medicineOrders: [],
    labBookings: [],
    sampleCollections: []
  });

  useEffect(() => {
    axios.get(`${apiUrl}/api/admin`)
      .then(res => setData(res.data))
      .catch(err => console.error('Error fetching admin data:', err));
  }, []);

  const renderTable = (dataArray, columns) => (
    <table className="table">
      <thead>
        <tr>{columns.map((col, i) => <th key={i}>{col}</th>)}</tr>
      </thead>
      <tbody>
        {dataArray.map((row, i) => (
          <tr key={i}>
            {columns.map((col, j) => (
              <td key={j}>{row[col.toLowerCase()]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="med-container admin-dashboard">
      <button
        onClick={handleExit}
        className="admin-exit-btn"
      >Exit</button>
      
      <h1>Admin Dashboard</h1>

      <div style={{ marginBottom: '20px' }}>
        <button className="order-btn" onClick={() => setTab('medicine')}>Medicine Orders</button>
        <button className="order-btn" onClick={() => setTab('lab')}>Lab Bookings</button>
        <button className="order-btn" onClick={() => setTab('sample')}>Sample Collections</button>
      </div>

      {tab === 'medicine' && renderTable(data.medicineOrders, ['Name', 'Item', 'Quantity'])}
      {tab === 'lab' && renderTable(data.labBookings, ['Name', 'Test', 'Date'])}
      {tab === 'sample' && renderTable(data.sampleCollections, ['Name', 'Test', 'Date', 'Time'])}
    </div>
  );
};

export default AdminDashboard;
