import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';
import './LabBooking.css';

const sampleTests = ['CBC', 'Liver Function', 'Thyroid', 'Diabetes Panel'];

const SampleCollection = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    test: '',
    date: '',
    time: ''
  });

  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type.includes('pdf') || file.type.includes('image'))) {
      setPrescriptionFile(file);
    } else {
      alert('Only PDF or image files allowed!');
    }
  };

  const generatePDF = () => {
     
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text('LifeLine360 - Sample Collection Summary', 10, 20);
    doc.text(`Name: ${form.name}, 10, 30`);
    doc.text(`Phone: ${form.phone}, 10, 40`);
    doc.text(`Address: ${form.address}, 10, 50`);
    doc.text(`Test: ${form.test}, 10, 60`);
    doc.text(`Date: ${form.date}, 10, 70`);
    doc.text(`Time: ${form.time}, 10, 80`);
    doc.save(`${form.name}_SampleRequest.pdf`);
  };

  const handleSubmit = () => {
    const phonePattern = /^[6-9]\d{9}$/;
    const allFilled = Object.values(form).every(Boolean);

    if (!allFilled) {
      alert('Please complete all fields!');
      return;
    }

    if (!phonePattern.test(form.phone)) {
      alert('Enter valid 10-digit phone number!');
      return;
    }

    if (!prescriptionFile) {
      alert('Please upload prescription file!');
      return;
    }

    generatePDF();
    setSubmitted(true);
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="med-container" style={{ position: 'relative' }}> 
          <button
  onClick={() => navigate('/lab-booking')}
  style={{
    position: 'absolute',
    bottom: '-10px',
    left: '20px',
    padding: '8px 16px',
    background: '#0077b6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }}
>
  Previous
</button>
      <button
        onClick={handleExit}
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '20px',
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
      <h1>Home Sample Collection</h1>

      <input
        className="search-input"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        className="search-input"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />
      <input
        className="search-input"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <select
        className="search-input"
        name="test"
        value={form.test}
        onChange={handleChange}
      >
        <option value="">Select Test</option>
        {sampleTests.map((t, i) => (
          <option key={i} value={t}>
            {t}
          </option>
        ))}
      </select>

      <input type="date" name="date" value={form.date} onChange={handleChange} />
      <input type="time" name="time" value={form.time} onChange={handleChange} />

      <input
        type="file"
        onChange={handleFileChange}
        accept=".pdf,image/*"
        className="search-input"
      />

      <button className="order-btn" onClick={handleSubmit}>
        Submit Request
      </button>

      {submitted && (
        <>
          <p style={{ marginTop: '15px', color: 'green' }}>
            Collection request submitted for <strong>{form.test}</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong>
          </p>
          <p style={{ fontStyle: 'italic' }}>
            PDF summary downloaded. We’ll contact you shortly!
          </p>
        </>
      )}
    </div>
  );
};

export default SampleCollection;