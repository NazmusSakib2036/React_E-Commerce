import React, { useState } from "react";
import HeroImg from '../assets/main.png';
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  // Start counting when component mounts
  React.useEffect(() => {
    const animation = animate(count, 100, { duration: 3 });
    return animation.stop;
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(255, 255, 255, 0.4)",
    background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  };

  const tapEffect = {
    scale: 0.96,
    transition: {
      duration: 0.2
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  // --- MODIFIED: Title word variants for hover effect ---
  const titleWordVariants = {
    rest: {
      scale: 1,
      // Change from transparent to the initial background gradient for text fill
      backgroundPosition: '0% 50%',
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    },
    hover: {
      scale: 1.05, // Still slight increase in size
      // Now, change the background gradient to a solid white to achieve white text color
      backgroundPosition: '100% 50%', // This helps with background gradient transitions
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    }
  };

  return (
    <div className="hero-section">
      {/* Particle background */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{
              x: [null, Math.random() * 100],
              y: [null, Math.random() * 100],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="floating-circle big"
        initial={{ y: -100, x: -100 }}
        animate={{
          y: [0, 50, 0],
          x: [0, 20, 0],
          rotate: 360
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="floating-circle small"
        initial={{ y: 100, x: 100 }}
        animate={{
          y: [0, -80, 0],
          x: [0, -40, 0],
          rotate: -360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Main hero card */}
      <motion.div
        className="hero-card"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image with parallax effect */}
        <motion.div
          className="hero-image-container"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
        >
          <img
            className="hero-image"
            src={HeroImg}
            alt="Hero"
          />
          <div className="image-overlay"></div>
          <div className="image-shine"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
        >
          <motion.h1
            className="hero-title"
            variants={itemVariants}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.span
              variants={titleWordVariants} // Apply new word variants
              animate={isHovered ? "hover" : "rest"}
            >
              Elevate
            </motion.span>{" "}
            <motion.span
              variants={titleWordVariants} // Apply new word variants
              animate={isHovered ? "hover" : "rest"}
            >
              Your
            </motion.span>{" "}
            <motion.span
              variants={titleWordVariants} // Apply new word variants
              animate={isHovered ? "hover" : "rest"}
            >
              Everyday
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Explore a curated selection of styles, crafted for those who demand more from fashion.
            </motion.span>
          </motion.p>

          <motion.div
            className="button-container"
            variants={itemVariants}
          >
            <Link
              to="/product"
              className="hero-button"
            >
              <motion.span
                className="button-content"
                whileHover={hoverEffect}
                whileTap={tapEffect}
                initial={{ boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
              >
                Explore Collection
                <motion.span
                  className="button-icon"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  →
                </motion.span>
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated counter */}
        <motion.div
          className="counter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div className="counter-number">
            {rounded}
          </motion.div>
          <div className="counter-label">Premium Products</div>
        </motion.div>
      </motion.div>

      {/* Scrolling indicator with animation */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="scroll-line"></div>
        <div className="scroll-text">Scroll Down</div>
      </motion.div>

      {/* Glow effects */}
      <div className="glow-effect pink"></div>
      <div className="glow-effect blue"></div>

      <style jsx>{`
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 800px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
        }

        .floating-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          z-index: 0;
        }

        .floating-circle.big {
          width: 400px;
          height: 400px;
          background: rgba(100, 200, 255, 0.1);
        }

        .floating-circle.small {
          width: 300px;
          height: 300px;
          background: rgba(255, 100, 200, 0.1);
        }

        .hero-card {
          position: relative;
          width: 90%;
          max-width: 1400px;
          height: 80vh;
          min-height: 700px;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          z-index: 2;
          background: rgba(20, 20, 20, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .hero-image-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom right,
            rgba(0,0,0,0.8) 0%,
            rgba(0,0,0,0.4) 50%,
            rgba(0,0,0,0.8) 100%
          );
        }

        .image-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.1) 50%,
            rgba(255,255,255,0) 100%
          );
          animation: shine 4s infinite;
        }

        @keyframes shine {
          0% { left: -100%; }
          20% { left: 100%; }
          100% { left: 100%; }
        }

        .hero-content {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          color: white;
          z-index: 3;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 5px 15px rgba(0,0,0,0.3);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }

        /* Applying the text fill and background-clip to the motion.span elements */
        .hero-title span {
          background: linear-gradient(to right, #fff, #ccc); /* Default gradient for the text */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          /* Ensure background-size is wide enough for the gradient shift */
          background-size: 200% 100%;
        }


        .hero-subtitle {
          font-size: 1.2rem;
          max-width: 700px;
          margin-bottom: 3rem;
          line-height: 1.6;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          font-weight: 300;
        }

        .button-container {
          position: relative;
          overflow: hidden;
          border-radius: 50px;
        }

        .hero-button {
          display: inline-block;
          text-decoration: none;
        }

        .button-content {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 1.2rem 3rem;
          background: white;
          color: #222;
          font-weight: 600;
          border-radius: 50px;
          font-size: 1.2rem;
          cursor: pointer;
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
          position: relative;
          overflow: hidden;
        }

        .button-icon {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .counter {
          position: absolute;
          bottom: 40px;
          right: 40px;
          color: white;
          text-align: right;
          z-index: 3;
        }

        .counter-number {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          background: linear-gradient(to bottom, #fff, #ddd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .counter-label {
          font-size: 1rem;
          opacity: 0.8;
          letter-spacing: 1px;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 4;
          color: white;
        }

        .scroll-line {
          width: 2px;
          height: 50px;
          background: linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0));
        }

        .scroll-text {
          margin-top: 10px;
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .glow-effect {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
        }

        .glow-effect.pink {
          width: 300px;
          height: 300px;
          background: rgba(255, 50, 150, 0.2);
          top: -100px;
          right: -100px;
        }

        .glow-effect.blue {
          width: 400px;
          height: 400px;
          background: rgba(50, 150, 255, 0.2);
          bottom: -150px;
          left: -150px;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
            padding: 0 1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
            flex-direction: column;
            gap: 0;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .button-content {
            padding: 1rem 2rem;
            font-size: 1rem;
          }

          .counter {
            bottom: 20px;
            right: 20px;
          }

          .counter-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;