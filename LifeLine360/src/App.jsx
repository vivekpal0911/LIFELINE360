import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Homepage/Navbar';
import HomePage from './Homepage/Homepage';
import PatientDashboard from './Homepage/PatientDashboard';
import LabBooking from './Homepage/LabBooking';
import MedicineOrdering from './Homepage/MedicineOrdering';
import MedicineDeliveryDashboard from './Homepage/MedicineDeliveryDashboard';
import DoctorDashboard from './Homepage/DoctorDashboard';
import AuthPage from './Homepage/AuthPage';
import PharmacistDashboard from './Homepage/PharmacistDashboard';
import AdminDashboard from './Homepage/AdminDashboard';
import SampleCollection from './Homepage/SampleCollection';
import DeliveryAnimation from './Homepage/DeliveryAnimation';
import DoctorConsultation from './Homepage/DoctorConsultation';
import EmergencyDashboard from './Homepage/EmergencyDashboard';
import MyReports from './Homepage/MyReports';
import ContactUs from './HomePage/ContactUs';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/my-reports" element={<MyReports />} />
        <Route path="/emergency-dashboard" element={<EmergencyDashboard />} />
        <Route path="/consultant" element={<DoctorConsultation />} />
        <Route path="/doctor/*" element={<DoctorDashboard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/lab-booking" element={<LabBooking />} />
        <Route path="/medicine-ordering" element={<MedicineOrdering />} />
        <Route path="/medicine-delivery" element={<MedicineDeliveryDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard/>} />
        <Route path="/pharmacist-dashboard" element={<PharmacistDashboard/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/sample-collection" element={<SampleCollection/>} />
        <Route path="/delivery-animation" element={<DeliveryAnimation/>} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
