import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../components";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="space-animation">
            <div className="planet"></div>
            <div className="astronaut">
              <div className="head"></div>
              <div className="body"></div>
              <div className="arm left"></div>
              <div className="arm right"></div>
            </div>
            <div className="stars">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="star" style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}></div>
              ))}
            </div>
            <div className="error-text">404</div>
          </div>
          <h1>Page Not Found</h1>
          <p>The page you're looking for is out of this world.</p>
          <Link to="/" className="home-button">
            ← Return to Home
          </Link>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .not-found-container {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          padding: 1rem;
          overflow: hidden;
          position: relative;
        }

        .not-found-content {
          text-align: center;
          max-width: 400px;
          padding: 1.5rem;
          position: relative;
          z-index: 2;
        }

        h1 {
          font-size: 1.5rem;
          margin: 1rem 0 0.5rem;
          color: #333;
        }

        p {
          color: #666;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .home-button {
          display: inline-block;
          padding: 0.6rem 1.5rem;
          background: #4f46e5;
          color: white;
          border-radius: 5px 20px 5px 20px;
          text-decoration: none;
          transition: all 0.3s ease, border-radius 0.3s ease;
          font-size: 0.9rem;
          border: 1px solid transparent;
        }

        .home-button:hover {
          background: white;
          color: #4f46e5;
          border-color: #4f46e5;
          text-decoration: none;
          transform: translateY(-2px);
          border-radius: 20px 5px 20px 5px;
        }

        /* Space Animation */
        .space-animation {
          width: 200px;
          height: 200px;
          margin: 0 auto 1rem;
          position: relative;
        }

        .planet {
          width: 100px;
          height: 100px;
          background: #4f46e5;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 30px rgba(79, 70, 229, 0.3);
          animation: planet-rotate 20s linear infinite;
        }

        .planet:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.05);
          border-radius: 50%;
          animation: planet-pulse 4s ease-in-out infinite;
        }

        .astronaut {
          position: absolute;
          top: 40%;
          left: 30%;
          transform: translate(-50%, -50%);
          animation: astronaut-float 6s ease-in-out infinite;
        }

        .astronaut .head {
          width: 20px;
          height: 20px;
          background: #4f46e5;
          border-radius: 50%;
          position: relative;
          z-index: 2;
          border: 2px solid white;
        }

        .astronaut .body {
          width: 30px;
          height: 40px;
          background: #4f46e5;
          position: relative;
          top: -3px;
          border-radius: 8px;
          border: 2px solid white;
        }

        .astronaut .arm {
          position: absolute;
          background: #4f46e5;
          border: 2px solid white;
        }

        .astronaut .arm {
          width: 20px;
          height: 8px;
          top: 12px;
        }

        .astronaut .arm.left {
          left: -16px;
          transform: rotate(30deg);
          animation: arm-swing-left 2s ease-in-out infinite;
        }

        .astronaut .arm.right {
          right: -16px;
          transform: rotate(-30deg);
          animation: arm-swing-right 2s ease-in-out infinite 0.5s;
        }

        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #4f46e5;
          border-radius: 50%;
          animation: star-twinkle 2s ease-in-out infinite;
        }

        .error-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3.5rem;
          font-weight: 800;
          color: rgba(0, 255, 4, 1);
          text-shadow: 0 0 10px rgba(255, 255, 255, 1);
          z-index: 1;
        }

        /* Animations */
        @keyframes planet-rotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes planet-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes astronaut-float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-15px); }
        }

        @keyframes arm-swing-left {
          0%, 100% { transform: rotate(30deg); }
          50% { transform: rotate(60deg); }
        }

        @keyframes arm-swing-right {
          0%, 100% { transform: rotate(-30deg); }
          50% { transform: rotate(-60deg); }
        }

        @keyframes star-twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        @media (max-width: 480px) {
          .space-animation {
            width: 150px;
            height: 150px;
          }
          
          .planet {
            width: 80px;
            height: 80px;
          }
          
          .error-text {
            font-size: 3rem;
          }
          
          h1 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
};

export default PageNotFound;