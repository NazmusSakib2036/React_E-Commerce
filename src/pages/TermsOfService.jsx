import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const TermsConditions = () => {
const currentDate = new Date().toLocaleDateString();

return (
    <>
        <Navbar />
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Terms & Conditions</h1>
            <p>Last updated: {currentDate}</p>

            <p>
                Welcome to <strong>NUB</strong>. By accessing or using our website, you agree to
                be bound by these Terms & Conditions. Please read them carefully before using our
                services.
            </p>

            <h2>1. Overview</h2>
            <p>
                NUB is an e-commerce platform offering products for men, women, electronics, and jewelry.
                These terms govern your use of the website and services provided by NUB.
            </p>

            <h2>2. User Account</h2>
            <ul>
                <li>You may need to create an account to access some features or place orders.</li>
                <li>You are responsible for maintaining the confidentiality of your account details.</li>
                <li>You must provide accurate, complete, and up-to-date information.</li>
            </ul>

            <h2>3. Orders & Payments</h2>
            <ul>
                <li>All orders are subject to availability and confirmation.</li>
                <li>Prices may change at any time, but we will honor the price at the time of your order.</li>
                <li>We reserve the right to cancel any order if there is an error with pricing or stock.</li>
            </ul>

            <h2>4. Shipping & Delivery</h2>
            <ul>
                <li>We aim to deliver products within the estimated timeframe, but delays may occur.</li>
                <li>Shipping charges may apply and will be shown during checkout.</li>
            </ul>

            <h2>5. Returns and Refunds</h2>
            <p>
                Please refer to our <strong>Return Policy</strong> page for detailed information regarding
                returns, refunds, and exchanges.
            </p>

            <h2>6. Use of Website</h2>
            <ul>
                <li>You agree not to misuse the site or attempt any unauthorized access.</li>
                <li>You must not upload harmful or unlawful content.</li>
            </ul>

            <h2>7. Intellectual Property</h2>
            <p>
                All content, logos, images, and trademarks on this site belong to NUB or its content
                creators. Unauthorized use is strictly prohibited.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
                NUB shall not be liable for any indirect, incidental, or consequential damages caused
                by the use of our services or products.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
                We may update these terms occasionally. Continued use of the site indicates your
                acceptance of any changes made.
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

export default TermsConditions;
