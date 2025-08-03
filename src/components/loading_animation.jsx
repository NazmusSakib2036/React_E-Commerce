import React from "react";
import "../assets/css/loader.css";
import LOGO from "../assets/images/NUB_Logo.png";

const PageReloadAnimation = () => {
  return (
    <div className="page-loader-overlay">
      <div className="loader-content">
        <img src={LOGO} alt="Loading..." className="loader-image" />
        <div className="loader-spinner"></div>
        <div className="loader-spinner"></div>
        <div className="loader-spinner"></div>
        <div className="loader-dots">
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default PageReloadAnimation;
