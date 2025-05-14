import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MyReports = () => {
  const navigate = useNavigate();
  const reports = [
    {
      name: "Blood Test Report",
      date: "2025-04-15",
      summary: "All values are within normal range.",
      link: "/reports/blood_test_apr15.pdf",
    },
    {
      name: "Liver Function Report",
      date: "2025-03-30",
      summary: "Mild elevation in SGPT.",
      link: "/reports/liver_function_mar30.pdf",
    },
    {
      name: "X-Ray Chest",
      date: "2025-02-20",
      summary: "Normal chest, no abnormality detected.",
      link: "/reports/xray_feb20.pdf",
    },
  ];
  const handleExit = () => {
    navigate('/');
  };
  return (
    <motion.div 
      className="dashboard-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>My Medical Reports</h1>
      <div className="card-container" style={{ position: 'relative' }}>
        <button
          onClick={handleExit}
          style={{
            position: 'absolute',
            bottom: '-50px',
            right: '20px',
            padding: '8px 16px',
            background: '#0077b6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >Exit</button>
        {reports.map((report, i) => (
          <motion.div 
            className="card" 
            key={i} 
            whileHover={{ scale: 1.05 }}
          >
            <p><strong>Report:</strong> {report.name}</p>
            <p><strong>Date:</strong> {report.date}</p>
            <p><strong>Summary:</strong> {report.summary}</p>
            <a href={report.link} download>
              <button className="order-btn" style={{ marginTop: '10px' }}>
                Download PDF
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MyReports;