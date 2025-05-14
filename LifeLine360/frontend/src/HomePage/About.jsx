import React from 'react';
import './Homepage.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2>About LifeLine360</h2>
      <p>
        LifeLine360 is a modern healthcare platform designed to connect patients, doctors, pharmacies, and labs on a single, secure network. 
        Our mission is to make healthcare accessible, efficient, and transparent for everyone.
      </p>
      <div className="about-features">
        <div>
          <strong>All-in-One Platform</strong>
          <p>Book appointments, order medicines, access lab reports, and consult top doctors — all in one place.</p>
        </div>
        <div>
          <strong>Trusted by Experts</strong>
          <p>100+ certified doctors, verified pharmacies, and accredited labs ensure you get the best care.</p>
        </div>
        <div>
          <strong>Secure & Private</strong>
          <p>Your health data is encrypted and never shared without your consent.</p>
        </div>
      </div>
    </section>
  );
} 