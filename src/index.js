import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// CSS
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Pages
import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
  PrivacyPolicy,
  TermsOfService,
} from "./pages";

import NotF from "./pages/NotF.jsx";
// import PrivacyPolicy from "./pages/privacy_policy.jsx";

// Components
import ScrollToTop from "./components/ScrollToTop";
import PageReloadAnimation from "./components/loading_animation.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // 1.8s animation

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageReloadAnimation />;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />    
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/sakib" element={<NotF />} />
            <Route path="/product/*" element={<PageNotFound />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            

            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Toaster />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
