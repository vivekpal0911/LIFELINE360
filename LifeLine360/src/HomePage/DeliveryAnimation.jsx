import React, { useState, useEffect } from 'react';
import './DeliveryAnimation.css';
import { useNavigate } from 'react-router-dom';
import { PackageCheck, Truck, CheckCircle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const steps = [
  { label: 'Order Placed', icon: <PackageCheck size={28} /> },
  { label: 'Out for Delivery', icon: <Truck size={28} /> },
  { label: 'Delivered', icon: <CheckCircle size={28} /> },
];

const start = [28.6139, 77.2090]; // Hospital (Delhi)
const end = [28.5355, 77.3910];   // Patient Address (Noida)

export default function DeliveryAnimation() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [position, setPosition] = useState(start);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    let index = 0;
    const steps = 100;
    const interval = setInterval(() => {
      if (index >= steps) return clearInterval(interval);
      const lat = start[0] + (end[0] - start[0]) * (index / steps);
      const lng = start[1] + (end[1] - start[1]) * (index / steps);
      setPosition([lat, lng]);
      index++;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const deliveryIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/8835/8835448.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const handleExit = () => navigate('/');

  return (
    <div className="track-container" style={{ position: 'relative' }}>
      {/* Navigation Buttons */}
      <button
        onClick={() => navigate('/medicine-ordering')}
        style={{
          position: 'absolute',
          top: '310px',
          left: '-150px',
          padding: '10px 16px',
          background: '#0077b6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Previous
      </button>

      <button
        onClick={handleExit}
        style={{
          position: 'absolute',
          top: '310px',
          right: '-150px',
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

      <h1>Tracking Your Delivery</h1>

      {/* Step Animation */}
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className={`step ${index <= currentStep ? 'active' : ''}`}>
            <div className="icon">{step.icon}</div>
            <span>{step.label}</span>
          </div>
        ))}
      </div>

      {/* Live Delivery Map */}
      <div className="map-container" style={{ marginTop: '40px' }}>
        <h2>Live Delivery Tracking</h2>
        <MapContainer center={start} zoom={11} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={start}>
            <Popup>Hospital</Popup>
          </Marker>
          <Marker position={end}>
            <Popup>Patient Home</Popup>
          </Marker>
          <Marker position={position} icon={deliveryIcon}>
            <Popup>Delivery in Progress</Popup>
          </Marker>
          <Polyline positions={[start, end]} color="blue" />
        </MapContainer>
      </div>
    </div>
  );
}
