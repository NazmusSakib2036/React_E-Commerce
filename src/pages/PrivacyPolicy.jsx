import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    
<>
<Navbar />
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: {currentDate}</p>
      <p>
        Welcome to <strong>NUB</strong>. Your privacy is important to us. This Privacy Policy
        outlines how we collect, use, and protect your information when you visit our e-commerce
        platform. By accessing or using NUB, you agree to the terms of this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, delivery address, and payment details when you place an order or sign up.</li>
        <li><strong>Browsing Information:</strong> Device information, IP address, browser type, and pages visited.</li>
        <li><strong>Cookies:</strong> We use cookies to enhance your shopping experience and analyze website traffic.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Process and ship your orders for men’s, women’s, electronics, and jewelry products.</li>
        <li>Send you updates, offers, and promotional content (you can opt out anytime).</li>
        <li>Improve our website experience and product offerings.</li>
        <li>Ensure security and detect any fraudulent activity.</li>
      </ul>

      <h2>3. How We Share Your Information</h2>
      <ul>
        <li>We may share your data with delivery services and payment processors to fulfill your order.</li>
        <li>We don’t sell your personal data to third parties.</li>
      </ul>

      <h2>4. Your Choices</h2>
      <ul>
        <li>You can update your account information or unsubscribe from emails anytime.</li>
        <li>You can disable cookies in your browser settings.</li>
      </ul>

      <h2>5. Security</h2>
      <p>
        We take appropriate measures to protect your data from unauthorized access, use, or disclosure.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy occasionally. Please review it frequently. Changes become
        effective once posted on this page.
      </p>

        <h2>10. Contact Us</h2>
            <p>
                If you have any questions about these Terms & Conditions, please contact us at:
                <br />
                <strong>Email:</strong> <a href="mailto:nazmuss024@gmail.com">nazmuss024@gmail.com</a> &nbsp;&nbsp;
                or  &nbsp;&nbsp; <Link to="/contact">Contact Us</Link>
            </p>
    </div>
<Footer />
</>
    
  );
};

export default PrivacyPolicy;
