import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LabBooking.css';

const tests = ['Blood Test', 'Urine Test', 'X-Ray', 'MRI', 'CT Scan', 'ECG'];

const LabBooking = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const filteredTests = tests.filter(test =>
    test.toLowerCase().includes(search.toLowerCase())
  );

  const handleConfirm = () => {
    if (selectedTest && date && time) {
      setConfirmed(true);
    } else {
      alert('Please fill all fields!');
    }
  };

  const handleExit = () => {
    navigate('/');
  };


  return (
    <div className="med-container" style={{ position: 'relative' }}>
      <button
  onClick={() => navigate('/sample-collection')}
  style={{
    position: 'absolute',
    bottom: '10px',
    left: '20px',
    padding: '8px 16px',
    background: '#0077b6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }}
>
  Sample Report
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
      >
        Exit
      </button>
      <h1>Lab Test Booking</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search Test..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="medicine-list">
        {filteredTests.map((test, i) => (
          <div
            key={i}
            className="medicine-item"
            style={{
              backgroundColor: selectedTest === test ? '#caf0f8' : '#e0f7fa'
            }}
            onClick={() => setSelectedTest(test)}
          >
            {test}
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Choose Date & Time</h2>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="time" value={time} onChange={e => setTime(e.target.value)} />

        <button className="order-btn" onClick={handleConfirm}>
          Confirm Booking
        </button>

        {confirmed && (
          <p style={{ marginTop: '15px', color: 'green' }}>
            Appointment confirmed for <strong>{selectedTest}</strong> on <strong>{date}</strong> at <strong>{time}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default LabBooking;