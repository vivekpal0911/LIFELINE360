import React, { useState } from 'react';
import axios from 'axios';
import './AuthPage.css';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function AuthPage() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    role: ''
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let submitData = { ...formData };
    // Remove default appointments, prescriptions, and history for patient registration
  
    const url = isLogin
      ? `${apiUrl}/api/login`
      : `${apiUrl}/api/register`;
  
    try {
      const { data } = await axios.post(url, submitData);
      alert(data.msg);
      if (isLogin) {
        const role = data.role;
        // Save email and role to localStorage (use backend response)
        localStorage.setItem('userEmail', data.email);
        localStorage.setItem('userRole', role);
        const redirectPath = localStorage.getItem('redirectAfterLogin');
        if (redirectPath) {
          navigate(redirectPath);
          localStorage.removeItem('redirectAfterLogin');
        } else if (role === 'patient') navigate('/patient-dashboard');
        else if (role === 'doctor') navigate('/doctor');
        else if (role === 'pharmacist') navigate('/pharmacist-dashboard');
        else if (role === 'delivery') navigate('/medicine-delivery');
        else navigate('/');
      }
    } catch (err) {
      console.error('API Error:', err); // 🛠 Console me clear error dikhega
      alert(err?.response?.data?.msg || 'Something went wrong');
    }
  };
  
  return (
    <div className="auth-bg">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="tabs">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
            style={{ position: 'relative' }}
          >
            Login
            {isLogin && (
              <motion.div
                className="tab-underline"
                layoutId="tab-underline"
                style={{ borderRadius: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
            style={{ position: 'relative' }}
          >
            Register
            {!isLogin && (
              <motion.div
                className="tab-underline"
                layoutId="tab-underline"
                style={{ borderRadius: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.form
            key={isLogin ? 'login' : 'register'}
            onSubmit={handleSubmit}
            className="auth-form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            style={{ width: '100%' }}
          >
            {!isLogin && (
              <>
                <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} value={formData.name} />
                <input type="text" name="phone" placeholder="Phone" required onChange={handleChange} value={formData.phone} />
              </>
            )}
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} value={formData.password} />
            {!isLogin && (
              <select name="role" required onChange={handleChange} value={formData.role}>
                <option value="">Select Role</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="pharmacist">Pharmacist</option>
                <option value="delivery">Delivery Partner</option>
              </select>
            )}
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {isLogin ? "Login" : "Register"}
            </motion.button>
          </motion.form>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
