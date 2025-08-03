import React from "react";
import "../assets/css/Service.css"; // Don't forget to create and import this CSS file
import { FaClock, FaPhoneAlt, FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-title">24/7 Customer Support</h1>
      <p className="service-description">
        Day or night, rain or shine — our team is always here to help you out.
        We believe in providing top-notch service whenever you need it.
      </p>

      <div className="service-cards">
        <div className="service-card">
          <FaClock className="service-icon" />
          <h2>Always Available</h2>
          <p>We work round the clock to solve your problems without delay.</p>
        </div>

        <div className="service-card">
          <FaPhoneAlt className="service-icon" />
          <h2>Instant Support</h2>
          <p>Call or chat anytime, we’ll pick up faster than your morning coffee.</p>
        </div>

        <div className="service-card">
          <FaHandsHelping className="service-icon" />
          <h2>Friendly Help</h2>
          <p>We solve issues with heart and humor — you're not just a ticket.</p>
        </div>
      </div>

      <Link to="/contact" className="contact-button">Contact Us Now</Link>
    </div>
  );
};

export default Service;
