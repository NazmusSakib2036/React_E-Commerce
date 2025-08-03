import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
// Import the new action creator here
import { addCart, delCart, clearCart, removeProductCompletely } from "../redux/action";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash, FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const [isProcessing, setIsProcessing] = useState(false);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center py-5">
            <div className="card shadow-sm border-0">
              <div className="card-body p-5">
                <div className="empty-cart-icon mb-4">
                  <FiShoppingCart size={64} className="text-muted" />
                </div>
                <h3 className="mb-3">Your Cart is Empty</h3>
                <p className="text-muted mb-4">
                  Looks like you haven't added anything to your cart yet
                </p>
                <Link
                  to="/product"
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

  const addItem = (product) => {
    dispatch(addCart(product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  // UPDATED: This function now dispatches the new action for complete removal
  const removeItemCompletely = (product) => {
    setIsProcessing(true);
    setTimeout(() => {
      dispatch(removeProductCompletely(product)); // Dispatch the new action here
      setIsProcessing(false);
    }, 300); // Small delay for UX
  };


  const handleClearCart = () => {
    setIsProcessing(true);
    setTimeout(() => {
      dispatch(clearCart());
      setIsProcessing(false);
    }, 300);
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
    const shippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
    const needsForFreeShipping = freeShippingThreshold - subtotal;
    const isFreeShipping = subtotal >= freeShippingThreshold;

    return {
      subtotal: Math.round(subtotal * 100) / 100,
      shipping: isFreeShipping ? 0 : shipping,
      totalItems,
      total: Math.round((subtotal + (isFreeShipping ? 0 : shipping)) * 100) / 100,
      shippingProgress,
      needsForFreeShipping,
      isFreeShipping
    };
  };

  const totals = calculateTotals();

  const ShowCart = () => {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0 d-flex align-items-center">
                  <FaShoppingBag className="me-2 text-primary" />
                  Your Shopping Cart ({state.length} {state.length === 1 ? "item" : "items"})
                </h5>
              </div>
              <div className="card-body">
                {state.map((item) => (
                  <div key={item.id} className="row align-items-center mb-4 pb-3 border-bottom">
                    <div className="col-md-2 col-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid rounded-3"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                      />
                    </div>
                    <div className="col-md-4 col-8">
                      <h6 className="mb-1">{item.title}</h6>
                      <p className="text-muted mb-0">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="col-md-3 col-6 mt-3 mt-md-0">
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary px-3 py-1"
                          onClick={() => removeItem(item)}
                          disabled={item.qty <= 1 || isProcessing}
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="mx-3">{item.qty}</span>
                        <button
                          className="btn btn-outline-secondary px-3 py-1"
                          onClick={() => addItem(item)}
                          disabled={isProcessing}
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 col-4 mt-3 mt-md-0 text-md-center">
                      <h6 className="mb-0">${(item.price * item.qty).toFixed(2)}</h6>
                    </div>
                    <div className="col-md-1 col-2 mt-3 mt-md-0 text-end">
                      <button
                        className="btn btn-link text-danger p-0"
                        onClick={() => removeItemCompletely(item)} // Now dispatches the correct action
                        disabled={isProcessing}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="mb-0">Shipping Progress</h6>
                  {totals.isFreeShipping ? (
                    <span className="badge bg-success">Free Shipping Unlocked!</span>
                  ) : (
                    <span className="text-muted">
                      ${totals.needsForFreeShipping.toFixed(2)} away from free shipping
                    </span>
                  )}
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: `${totals.shippingProgress}%` }}
                    aria-valuenow={totals.shippingProgress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <Link to="/product" className="btn btn-outline-primary">
                <FaArrowLeft className="me-2" />
                Continue Shopping
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={handleClearCart}
                disabled={isProcessing || state.length === 0}
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="card shadow-sm" style={{ top: "20px", position: "sticky" }}>
              <div className="card-header bg-white py-3">
                <h5 className="mb-0">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
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

                <div className="d-grid gap-3">
                  <Link
                    to="/checkout"
                    className="btn btn-primary btn-lg"
                    disabled={state.length === 0 || isProcessing}
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    to="/product"
                    className="btn btn-outline-secondary"
                  >
                    Continue Shopping
                  </Link>
                </div>

                <div className="mt-4">
                  <div className="d-flex mb-2">
                    <div className="flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#198754"/>
                        <path d="M10 14.17L16.59 7.58L18 9L10 17L6 13L7.41 11.59L10 14.17Z" fill="#198754"/>
                      </svg>
                    </div>
                    <div className="ms-3">
                      <small className="text-muted">Secure checkout</small>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#198754"/>
                        <path d="M10 14.17L16.59 7.58L18 9L10 17L6 13L7.41 11.59L10 14.17Z" fill="#198754"/>
                      </svg>
                    </div>
                    <div className="ms-3">
                      <small className="text-muted">Easy returns</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <li className="breadcrumb-item active" aria-current="page">
                Shopping Cart
              </li>
            </ol>
          </nav>
          {state.length > 0 ? <ShowCart /> : <EmptyCart />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;