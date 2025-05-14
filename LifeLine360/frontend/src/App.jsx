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
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/doctor-card" element={<DoctorCard />} />
        <Route path="/pharmacist-dashboard" element={<PharmacistDashboard />} />
        <Route path="/medicine-delivery" element={<MedicineDeliveryDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/lab-booking" element={<LabBooking />} />
        <Route path="/medicine-ordering" element={<MedicineOrdering />} />
        <Route path="/sample-collection" element={<SampleCollection />} />
        <Route path="/delivery-animation" element={<DeliveryAnimation />} />
        <Route path="/consultant" element={<ProtectedRoute><DoctorConsultation /></ProtectedRoute>} />
        <Route path="/emergency-dashboard" element={<EmergencyDashboard />} />
        <Route path="/my-reports" element={<MyReports />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
     </>
  );
}

export default App;
