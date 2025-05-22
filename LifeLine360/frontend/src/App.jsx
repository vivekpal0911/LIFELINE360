import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './HomePage/Navbar';
import HomePage from './HomePage/Homepage';
import LabBooking from './HomePage/LabBooking';
import MedicineOrdering from './HomePage/MedicineOrdering';
import MedicineDeliveryDashboard from './HomePage/MedicineDeliveryDashboard';
import DoctorDashboard from './HomePage/DoctorDashboard';
import AuthPage from './HomePage/AuthPage';
import PharmacistDashboard from './HomePage/PharmacistDashboard';
import AdminDashboard from './HomePage/AdminDashboard';
import SampleCollection from './HomePage/SampleCollection';
import DeliveryAnimation from './HomePage/DeliveryAnimation';
import DoctorConsultation from './HomePage/DoctorConsultation';
import EmergencyDashboard from './HomePage/EmergencyDashboard';
import MyReports from './HomePage/MyReports';
import ContactUs from './HomePage/ContactUs';
import DoctorCard from './HomePage/DoctorCard';
import PatientStatus from './HomePage/PatientStatus';
import Footer from './HomePage/Footer';
import Services from './HomePage/Services';
import About from './HomePage/About';
import PatientDashboard from './HomePage/PatientDashboard';
import ProtectedRoute from './HomePage/ProtectedRoute';


function App() {
  return (
     <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/patient-status" element={<PatientStatus />} />
        <Route path="/doctor" element={<ProtectedRoute role="doctor"><DoctorDashboard /></ProtectedRoute>} />
        <Route path="/doctor-card" element={<ProtectedRoute role="doctor"><DoctorCard /></ProtectedRoute>} />
        <Route path="/pharmacist-dashboard" element={<ProtectedRoute role="pharmacist"><PharmacistDashboard /></ProtectedRoute>} />
        <Route path="/medicine-delivery" element={<ProtectedRoute role="delivery"><MedicineDeliveryDashboard /></ProtectedRoute>} />
        <Route path="/admin-dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/lab-booking" element={<ProtectedRoute role="patient"><LabBooking /></ProtectedRoute>} />
        <Route path="/medicine-ordering" element={<ProtectedRoute role="patient"><MedicineOrdering /></ProtectedRoute>} />
        <Route path="/sample-collection" element={<ProtectedRoute role="patient"><SampleCollection /></ProtectedRoute>} />
        <Route path="/delivery-animation" element={<ProtectedRoute role="delivery"><DeliveryAnimation /></ProtectedRoute>} />
        <Route path="/consultant" element={<ProtectedRoute role="doctor"><DoctorConsultation /></ProtectedRoute>} />
        <Route path="/emergency-dashboard" element={<ProtectedRoute role="patient"><EmergencyDashboard /></ProtectedRoute>} />
        <Route path="/my-reports" element={<ProtectedRoute role="patient"><MyReports /></ProtectedRoute>} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/patient-dashboard" element={<ProtectedRoute role="patient"><PatientDashboard /></ProtectedRoute>} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
     </>
  );
}

export default App;
