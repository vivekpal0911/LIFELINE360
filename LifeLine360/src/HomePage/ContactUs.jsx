import React, { useState } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting us!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Contact Us</h2>
      <p>We’re here to help. Reach out with any questions or feedback.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} />
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faCommentDots} />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </motion.div>
  );
};

export default ContactUs;