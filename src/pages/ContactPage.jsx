import React from "react";
import { Footer, Navbar } from "../components";

import { BsEnvelopeFill, BsTelephoneFill, BsGeoAltFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";


const ContactPage = () => {
  return (
    <>

      <Navbar />

      <div
        className="position-relative"
        style={{
          background:
            "linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)",
          minHeight: "100vh",
        }}
      >
        {/* Decorative SVG Wave */}
        <svg
          viewBox="0 0 1440 120"
          className="w-100"
          style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        >
          <path
            fill="#6366f1"
            fillOpacity="0.15"
            d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,112C672,96,768,64,864,64C960,64,1056,96,1152,106.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="container my-5 py-4 position-relative" style={{ zIndex: 1 }}>
          <h1 className="text-center mb-4 display-4 fw-bold text-primary">
            Contact Us
          </h1>
          <p className="text-center text-secondary mb-5 fs-5">
            We'd love to hear from you! Fill out the form and our team will get back to you soon.
          </p>
          <hr className="mb-5" />
          <div className="row justify-content-center align-items-start">
            {/* Contact Info Side */}
            <div className="col-md-5 mb-4 mb-md-0">
              <div className="card shadow-lg border-0 rounded-4 p-4 bg-light h-100">
                <h3 className="mb-4 text-primary fw-bold">Get in Touch</h3>


                <div className="mb-3 d-flex align-items-center">
        <span className="bg-primary bg-opacity-10 rounded-circle p-3 me-3 d-flex align-items-center justify-content-center">
          <BsEnvelopeFill className="text-primary fs-4" />
        </span>
        <span><a href="mailto:nazmuss024@gmail.com" className="text-decoration-none">nazmuss024@gmail.com</a></span>
      </div>

      <div className="mb-3 d-flex align-items-center">
        <span className="bg-primary bg-opacity-10 rounded-circle p-3 me-3 d-flex align-items-center justify-content-center">
          <BsTelephoneFill className="text-primary fs-4" />
        </span>
        <span><a href="tel:01313186576" className="text-decoration-none">+880 1313186576</a></span>
      </div>

      <div className="mb-3 d-flex align-items-center">
        <span className="bg-primary bg-opacity-10 rounded-circle p-3 me-3 d-flex align-items-center justify-content-center">
          <BsGeoAltFill className="text-primary fs-4" />
        </span>
        <span>Uttar-mirpur, Dhaka, Bangladesh</span>
      </div>


                <div className="d-flex gap-3 mt-4">
      <a
        href="https://www.facebook.com/Nazmus.Sakib.41240102036/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary fs-3"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.linkedin.com/in/nazmus-sakib-303345241"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary fs-3"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/NazmusSakib2036"
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark fs-3"
      >
        <FaGithub />
      </a>
    </div>


                
                <div className="mt-5">
                  <img
                    src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
                    alt="Contact illustration"
                    className="img-fluid rounded-4 shadow-sm"
                  />
                </div>
              </div>
            </div>
            {/* Contact Form Side */}
            <div className="col-md-7">
              <div className="card shadow-lg border-0 rounded-4 p-4 bg-white">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="Name" className="form-label fw-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="Name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="Email" className="form-label fw-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="Email"
                        placeholder="nazmuss024@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="Phone" className="form-label fw-semibold">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="Phone"
                        placeholder="e.g. 01313186576"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="Subject" className="form-label fw-semibold">
                        Subject
                      </label>
                      <select className="form-select form-select-lg" id="Subject">
                        <option>General Inquiry</option>
                        <option>Order Support</option>
                        <option>Feedback</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Message" className="form-label fw-semibold">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="form-control form-control-lg"
                      id="Message"
                      placeholder="Enter your message"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary btn-lg px-5 py-2 rounded-pill shadow"
                      type="submit"
                    >
                      <i className="bi bi-send me-2"></i>
                      Send Message
                    </button>
                  </div>
                </form>
                {/* Decorative Divider */}
                <div className="text-center mt-4">
                  <span className="badge bg-primary bg-opacity-10 text-primary fs-6 px-4 py-2 rounded-pill shadow-sm">
                    We respond within 24 hours!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  );
};

export default ContactPage;
