import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegistrationError("");
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Handle successful registration (redirect would typically happen here)
        console.log("Registration successful", formData);
      } catch (error) {
        setRegistrationError("Registration failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const calculatePasswordStrength = () => {
    if (!formData.password) return 0;
    let strength = 0;
    if (formData.password.length >= 8) strength += 1;
    if (formData.password.match(/[A-Z]/)) strength += 1;
    if (formData.password.match(/[0-9]/)) strength += 1;
    if (formData.password.match(/[^A-Za-z0-9]/)) strength += 1;
    return strength;
  };

  const getPasswordStrengthColor = () => {
    const strength = calculatePasswordStrength();
    if (strength === 0) return "bg-secondary";
    if (strength === 1) return "bg-danger";
    if (strength === 2) return "bg-warning";
    if (strength === 3) return "bg-info";
    return "bg-success";
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold text-primary">Create Your Account</h2>
                  <p className="text-muted">Join our community today</p>
                </div>

                {registrationError && (
                  <div className="alert alert-danger" role="alert">
                    {registrationError}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="input-group mb-1">
                      <input
                        type={showPassword ? "text" : "password"}
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                    {errors.password && (
                      <div className="invalid-feedback d-block">{errors.password}</div>
                    )}
                    <div className="progress mt-2" style={{ height: "5px" }}>
                      <div
                        className={`progress-bar ${getPasswordStrengthColor()}`}
                        role="progressbar"
                        style={{ width: `${calculatePasswordStrength() * 25}%` }}
                        aria-valuenow={calculatePasswordStrength() * 25}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small className="text-muted">
                      Password must be at least 8 characters with uppercase, number, and special character
                    </small>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                      {errors.confirmPassword && (
                        <div className="invalid-feedback">{errors.confirmPassword}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""}`}
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="acceptTerms">
                        I agree to the <Link to="/terms" className="text-decoration-none">Terms and Conditions</Link>
                      </label>
                      {errors.acceptTerms && (
                        <div className="invalid-feedback d-block">{errors.acceptTerms}</div>
                      )}
                    </div>
                  </div>

                  <div className="d-grid mb-3">
                    <button
                      className="btn btn-primary btn-lg"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Registering...
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </button>
                  </div>

                  <div className="text-center mb-4">
                    <p className="text-muted">Or register with</p>
                    <div className="d-flex justify-content-center gap-3">
                      <button
                        type="button"
                        className="btn btn-outline-danger rounded-circle p-2"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <FaGoogle />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary rounded-circle p-2"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <FaFacebook />
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-dark rounded-circle p-2"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <FaGithub />
                      </button>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="mb-0">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-decoration-none fw-bold"
                      >
                        Sign in
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;