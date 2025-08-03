import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-dark mt-5 pt-4 border-top shadow-sm">
      <div className="d-flex align-items-center justify-content-center pb-4">
        <div className="col-md-6">

          {/* Social Icons */}
          <div className="mt-2">
            <a
              className="text-dark fs-4 mx-3 transition-all hover-opacity"
              href="https://github.com/NazmusSakib2036"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              className="text-dark fs-4 mx-3 transition-all hover-opacity"
              href="https://www.facebook.com/Nazmus.Sakib.41240102036"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="text-dark fs-4 mx-3 transition-all hover-opacity"
              href="https://www.linkedin.com/in/nazmus-sakib-303345241"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>

          {/* Privacy & Terms Links */}
          <div className="mt-3 d-flex justify-content-center gap-3 small fw-semibold">
            <a
              href="/privacy-policy"
              className="text-decoration-none text-secondary-hover"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="/terms-of-service"
              className="text-decoration-none text-secondary-hover"
            >
              Terms & Conditions
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-3 mb-2 text-muted">
            © 2025 Develop & Design by{" "}
            <a
              href="https://nazmussakib.me"
              className="text-dark text-decoration-none fw-medium"
              target="_blank"
              rel="noreferrer"
            >
              Nazmus Sakib
            </a>
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
