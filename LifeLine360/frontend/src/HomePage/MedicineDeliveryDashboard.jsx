import React, { useState } from 'react';
import './MedicineDeliveryDashboard.css';
import { useNavigate } from 'react-router-dom';
import { PackageCheck, Truck, CheckCircle } from 'lucide-react';

const initialDeliveries = [
  {
    id: 1,
    patientName: "Amit Kumar",
    address: "123 Green Avenue, Delhi",
    medicines: ["Paracetamol 500mg", "Zincovit"],
    status: "Out for Delivery",
  },
  {
    id: 2,
    patientName: "Sneha Sharma",
    address: "Flat 7B, Sunrise Apartments, Mumbai",
    medicines: ["Azithromycin 250mg"],
    status: "Pending",
  },
];

export default function MedicineDeliveryDashboard() {
  const [deliveries, setDeliveries] = useState(initialDeliveries);
  const navigate = useNavigate();

  const updateStatus = (id, newStatus) => {
    const updated = deliveries.map((d) =>
      d.id === id ? { ...d, status: newStatus } : d
    );
    setDeliveries(updated);
  };
  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="delivery-container" style={{ position: 'relative' }}>
       <button
        onClick={() => navigate('/pharmacist-dashboard')}
        style={{
          position: 'absolute',
          bottom: '30px',
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
        onClick={() => navigate('/medicine-ordering')}
        style={{
          position: 'absolute',
          bottom: '30px',
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
      <h2><Truck size={36} /> Medicine Delivery Dashboard</h2>

      <div className="delivery-list">
        {deliveries.map((delivery) => (
          <div className="delivery-card" key={delivery.id}>
            <h2>{delivery.patientName}</h2>
            <p><strong>Address:</strong> {delivery.address}</p>
            <p><strong>Medicines:</strong> {delivery.medicines.join(', ')}</p>
            <p><strong>Status:</strong> <span className={delivery.status}>{delivery.status}</span></p>

            {delivery.status !== "Delivered" && (
              <button
                onClick={() =>
                  updateStatus(
                    delivery.id,
                    delivery.status === "Pending" ? "Out for Delivery" : "Delivered"
                  )
                }
              >
                Mark as {delivery.status === "Pending" ? "Out for Delivery" : "Delivered"}
              </button>
            )}

            {delivery.status === "Delivered" && (
              <div className="delivered-icon">
                <CheckCircle color="green" size={28} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
