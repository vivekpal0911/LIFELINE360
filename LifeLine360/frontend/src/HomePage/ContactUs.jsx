import React, { useEffect, useState } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faCommentDots, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.classList.add('contact-bg');
    return () => document.body.classList.remove('contact-bg');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-fullscreen">
      <motion.div
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Contact Us</h2>
        <p>We're here to help. Reach out with any questions or feedback.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faCommentDots} />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
          {submitted && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ color: '#43aa8b', marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <FontAwesomeIcon icon={faCheckCircle} /> Thank you! Your message has been sent.
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUs;