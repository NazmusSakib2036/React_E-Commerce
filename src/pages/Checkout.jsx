import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCheck, FaCreditCard, FaPaypal, FaLock } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "", // Added phone number field
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: ""
  });
  const [errors, setErrors] = useState({});

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center py-5">
            <div className="card shadow-sm border-0">
              <div className="card-body p-5">
                <div className="empty-cart-icon mb-4">
                  <FiShoppingBag size={64} className="text-muted" />
                </div>
                <h3 className="mb-3">Your Cart is Empty</h3>
                <p className="text-muted mb-4">
                  Looks like you haven't added anything to your cart yet
                </p>
                <Link
                  to="/"
                  className="btn btn-primary btn-lg px-4"
                >
                  <FaArrowLeft className="me-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const calculateTotals = () => {
    let subtotal = 0;
    const shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    const freeShippingThreshold = 100;
    const isFreeShipping = subtotal >= freeShippingThreshold;

    return {
      subtotal: Math.round(subtotal * 100) / 100,
      shipping: isFreeShipping ? 0 : shipping,
      totalItems,
      total: Math.round((subtotal + (isFreeShipping ? 0 : shipping)) * 100) / 100,
      isFreeShipping
    };
  };

  const totals = calculateTotals();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      // Phone number validation: basic check for digits, optional advanced regex
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = "Phone number is required";
      } else if (!/^\d{10,15}$/.test(formData.phoneNumber)) { // Basic 10-15 digit validation
        newErrors.phoneNumber = "Invalid phone number format";
      }

      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.country) newErrors.country = "Country is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.zip) newErrors.zip = "Zip code is required";
    }

    if (step === 2 && paymentMethod === "credit-card") {
      if (!formData.cardName) newErrors.cardName = "Card name is required";
      if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
      if (!formData.cardExpiry) newErrors.cardExpiry = "Expiry date is required";
      if (!formData.cardCvv) newErrors.cardCvv = "CVV is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(activeStep)) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(activeStep)) {
      // Process payment and submit order
      console.log("Order submitted:", formData);
      // You might want to clear the cart or redirect here after successful submission
      // For demonstration, we'll just move to the confirmation step if not already there
      if (activeStep < 3) {
        setActiveStep(activeStep + 1);
      }
    }
  };

  const CheckoutSteps = () => {
    return (
      <div className="checkout-steps mb-4">
        <div className="d-flex justify-content-between">
          <div className={`step ${activeStep >= 1 ? "active" : ""}`}>
            <div className="step-circle">{activeStep > 1 ? <FaCheck /> : "1"}</div>
            <div className="step-label">Shipping</div>
          </div>
          <div className={`step ${activeStep >= 2 ? "active" : ""}`}>
            <div className="step-circle">{activeStep > 2 ? <FaCheck /> : "2"}</div>
            <div className="step-label">Payment</div>
          </div>
          <div className={`step ${activeStep >= 3 ? "active" : ""}`}>
            <div className="step-circle">3</div>
            <div className="step-label">Confirmation</div>
          </div>
        </div>
      </div>
    );
  };

  const ShippingStep = () => {
    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-white py-3">
          <h4 className="mb-0">Shipping Information</h4>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>

            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>

            <div className="col-md-6"> {/* Changed to col-md-6 */}
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="col-md-6"> {/* Added phone number input field */}
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="tel" // Use type="tel" for better mobile keyboard
                className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="e.g., 015XXXXXXXX"
                required
              />
              {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="1230 - Dhaka, Bangladesh"
                required
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>

            <div className="col-12">
              <label htmlFor="address2" className="form-label">
                Address 2 <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                placeholder="Apartment or suite"
              />
            </div>

            <div className="col-md-5">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <select
                className={`form-select ${errors.country ? "is-invalid" : ""}`}
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option>United States</option>
                <option>Bangladesh</option>
                <option>United Kingdom</option>
                <option>Canada</option>
              </select>
              {errors.country && <div className="invalid-feedback">{errors.country}</div>}
            </div>

            <div className="col-md-4">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <select
                className={`form-select ${errors.state ? "is-invalid" : ""}`}
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option>California</option>
                <option>Dhaka</option>
                <option>Texas</option>
                <option>Maharashtra</option>
              </select>
              {errors.state && <div className="invalid-feedback">{errors.state}</div>}
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className={`form-control ${errors.zip ? "is-invalid" : ""}`}
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
              {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PaymentStep = () => {
    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-white py-3">
          <h4 className="mb-0">Payment Method</h4>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-12">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="credit-card"
                  checked={paymentMethod === "credit-card"}
                  onChange={() => setPaymentMethod("credit-card")}
                />
                <label className="form-check-label d-flex align-items-center" htmlFor="credit-card">
                  <FaCreditCard className="me-2" /> Credit Card
                </label>
              </div>

              {paymentMethod === "credit-card" && (
                <div className="ps-4 mb-4">
                  <div className="row gy-3">
                    <div className="col-md-12">
                      <label htmlFor="cardName" className="form-label">
                        Name on card
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.cardName ? "is-invalid" : ""}`}
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                      />
                      <small className="text-muted">Full name as displayed on card</small>
                      {errors.cardName && <div className="invalid-feedback">{errors.cardName}</div>}
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="cardNumber" className="form-label">
                        Credit card number
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.cardNumber ? "is-invalid" : ""}`}
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                      />
                      {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="cardExpiry" className="form-label">
                        Expiration
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.cardExpiry ? "is-invalid" : ""}`}
                        id="cardExpiry"
                        name="cardExpiry"
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        required
                      />
                      {errors.cardExpiry && <div className="invalid-feedback">{errors.cardExpiry}</div>}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="cardCvv" className="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.cardCvv ? "is-invalid" : ""}`}
                        id="cardCvv"
                        name="cardCvv"
                        value={formData.cardCvv}
                        onChange={handleChange}
                        required
                      />
                      {errors.cardCvv && <div className="invalid-feedback">{errors.cardCvv}</div>}
                    </div>
                  </div>
                </div>
              )}

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                <label className="form-check-label d-flex align-items-center" htmlFor="paypal">
                  <FaPaypal className="me-2" /> PayPal
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ConfirmationStep = () => {
    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-header bg-white py-3">
          <h4 className="mb-0">Order Confirmation</h4>
        </div>
        <div className="card-body">
          <div className="alert alert-success mb-4">
            <h5 className="alert-heading">Thank you for your order!</h5>
            <p className="mb-0">Your order has been placed successfully.</p>
          </div>

          <div className="mb-4">
            <h5>Order Summary</h5>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {state.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.qty}</td>
                      <td>${(item.price * item.qty).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="2">Subtotal</th>
                    <td>${totals.subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th colSpan="2">Shipping</th>
                    <td>{totals.isFreeShipping ? "FREE" : `$${totals.shipping.toFixed(2)}`}</td>
                  </tr>
                  <tr>
                    <th colSpan="2">Total</th>
                    <td>${totals.total.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="mb-4">
            <h5>Shipping Information</h5>
            <address>
              <strong>{formData.firstName} {formData.lastName}</strong><br />
              {formData.address}<br />
              {formData.address2 && <>{formData.address2}<br /></>}
              {/* Note: formData.city is not collected, assuming state covers it for display */}
              {formData.state} {formData.zip}<br />
              {formData.country}<br />
              <abbr title="Phone">Phone:</abbr> {formData.phoneNumber}<br /> {/* Display phone number */}
              <abbr title="Email">Email:</abbr> {formData.email}
            </address>
          </div>

          <div className="text-center">
            <Link to="/product" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const OrderSummary = () => {
    return (
      <div className="card shadow-sm mb-4" style={{ top: "20px", position: "sticky" }}>
        <div className="card-header bg-white py-3">
          <h5 className="mb-0">Order Summary</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            {state.map((item) => (
              <div key={item.id} className="d-flex mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded me-3"
                  width="60"
                  height="60"
                  style={{ objectFit: "cover" }}
                />
                <div className="flex-grow-1">
                  <h6 className="mb-1">{item.title}</h6>
                  <p className="text-muted mb-0">
                    {item.qty} × ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="text-end">
                  <strong>${(item.price * item.qty).toFixed(2)}</strong>
                </div>
              </div>
            ))}
          </div>

          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              <span>Subtotal ({totals.totalItems} items)</span>
              <span>${totals.subtotal.toFixed(2)}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              <span>Shipping</span>
              <span className={totals.isFreeShipping ? "text-success" : ""}>
                {totals.isFreeShipping ? "FREE" : `$${totals.shipping.toFixed(2)}`}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-top px-0 pt-3 mb-3">
              <div>
                <strong>Total</strong>
              </div>
              <span>
                <strong>${totals.total.toFixed(2)}</strong>
              </span>
            </li>
          </ul>

          <div className="d-flex align-items-center text-muted mb-3">
            <FaLock className="me-2" />
            <small>Secure checkout</small>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8">
            <CheckoutSteps />

            {activeStep === 1 && <ShippingStep />}
            {activeStep === 2 && <PaymentStep />}
            {activeStep === 3 && <ConfirmationStep />}

            {activeStep < 3 && (
              <div className="d-flex justify-content-between mt-4"> {/* Added mt-4 for spacing */}
                {activeStep > 1 ? (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={handlePrevStep}
                  >
                    <FaArrowLeft className="me-2" />
                    Back
                  </button>
                ) : (
                  <Link to="/cart" className="btn btn-outline-secondary">
                    <FaArrowLeft className="me-2" />
                    Back to Cart
                  </Link>
                )}

                <button
                  className="btn btn-primary"
                  onClick={handleNextStep} // Always call handleNextStep
                >
                  Continue
                </button>
              </div>
            )}
            {activeStep === 3 && ( // Render "Place Order" button only on step 3
                <div className="d-flex justify-content-end mt-4">
                    <button
                        className="btn btn-success btn-lg" // Changed to btn-success for emphasis
                        onClick={handleSubmit}
                    >
                        Place Order <FaCheck className="ms-2" />
                    </button>
                </div>
            )}
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <OrderSummary />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="py-4">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Checkout
              </li>
            </ol>
          </nav>
          {state.length ? <ShowCheckout /> : <EmptyCart />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;