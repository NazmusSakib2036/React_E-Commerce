import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// male clothing imports
import Male_1 from "../assets/images/male_1.png";
import Male_2 from "../assets/images/male_2.png";
import Male_3 from "../assets/images/male_3.png";
import Male_4 from "../assets/images/male_4.png";
import Male_5 from "../assets/images/male_5.png";
import Male_6 from "../assets/images/male_6.png";

// female clothing imports
import Female_1 from "../assets/images/female_1.png";
import Female_2 from "../assets/images/female_2.png";
import Female_3 from "../assets/images/female_3.png";
import Female_4 from "../assets/images/female_4.png";
import Female_5 from "../assets/images/female_5.png";
import Female_6 from "../assets/images/female_6.png";

// jewelery imports
import Jewelery_1 from "../assets/images/jewelery_1.png";
import Jewelery_2 from "../assets/images/jewelery_2.png";
import Jewelery_3 from "../assets/images/jewelery_3.png";
import Jewelery_4 from "../assets/images/jewelery_4.png";
import Jewelery_5 from "../assets/images/jewelery_5.png";
import Jewelery_6 from "../assets/images/jewelery_6.png";

// electronics imports
import Electronics_1 from "../assets/images/electronic_1.png";
import Electronics_2 from "../assets/images/electronic_2.png";
import Electronics_3 from "../assets/images/electronic_3.png";
import Electronics_4 from "../assets/images/electronic_4.png";
import Electronics_5 from "../assets/images/electronic_5.png";
import Electronics_6 from "../assets/images/electronic_6.png";

const customProducts = [
  {
    id: 1,
    title: "Premium Cotton T-Shirt",
    price: 24.99,
    discountprice: 29.99,
    description: "Soft premium cotton t-shirt available in multiple colors",
    category: "men's clothing",
    image: Male_1,
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: 2,
    title: "Designer Handbag",
    price: 89.99,
    discountprice: 100.00,
    description: "Elegant leather handbag with multiple compartments",
    category: "women's clothing",
    image: Female_1,
    rating: { rate: 4.8, count: 85 },
  },
  {
    id: 3,
    title: "Diamond rings with precious stones",
    price: 99.99,
    discountprice: 120.00,
    description: "Stylish diamond rings with precious stones",
    category: "jewelery",
    image: Jewelery_1,
    rating: { rate: 4.7, count: 64 },
  },
  {
    id: 4,
    title: "Xilinx Kintex-7 FPGA Board, professional SDI video processing",
    price: 59.99,
    discountprice: 79.99,
    description:
      "ALINX AV7K300: XILINX Kintex-7 K7 7325 XC7K325 SDI Video Image Processing SFP PCIE Accelerator Card FPGA Development Board",
    category: "electronics",
    image: Electronics_1,
    rating: { rate: 4.2, count: 210 },
  },
  {
    id: 5,
    title: "Denim Jeans",
    price: 49.99,
    discountprice: 55.00,
    description: "Classic fit denim jeans with stretch fabric",
    category: "men's clothing",
    image: Male_2,
    rating: { rate: 4.3, count: 156 },
  },
  {
    id: 6,
    title: "Gold ring with blue gemstones",
    price: 59.99,
    description: "Elegant gold ring featuring stunning blue gemstones",
    category: "jewelery",
    image: Jewelery_2,
    rating: { rate: 4.5, count: 150 },
  },
  {
    id: 7,
    title: "Msi motherboard with Intel Core i7 processor",
    price: 89.99,
    discountprice: 110.00, 
    description: "High-performance motherboard for Intel Core i7 processors",
    category: "electronics",
    image: Electronics_2,
    rating: { rate: 4.8, count: 85 },
  },
  {
    id: 8,
    title: "Pretty Elegant Women Tshirts",
    price: 29.99,
    description: "Stylish and comfortable t-shirts for women",
    category: "women's clothing",
    image: Female_2,
    rating: { rate: 4.3, count: 150 },
  },
  {
    id: 9,
    title: "Ornate Gold Bangles Adorned with Colorful Stones",
    price: 45.99,
    description: "Ornate gold bangles adorned with colorful stones",
    category: "jewelery",
    image: Jewelery_3,
    rating: { rate: 4.7, count: 64 },
  },
  {
    id: 10,
    title: "Super Fast SSD Drive",
    price: 89.99,
    description: "High-speed SSD drive with 1TB storage capacity",
    category: "electronics",
    image: Electronics_3,
    rating: { rate: 4.8, count: 85 },
  },
  {
    id: 11,
    title: "Formal Blazer",
    price: 45.09,
    discountprice: 50.00,
    description: "Stylish formal blazer outfits for men",
    category: "men's clothing",
    image: Male_3,
    rating: { rate: 4.7, count: 64 },
  },
  {
    id: 12,
    title: "Women's Shirt",
    price: 29.99,
    description: "Stylish women's shirt for casual wear",
    category: "women's clothing",
    image: Female_3,
    rating: { rate: 4.5, count: 78 },
  },
  {
    id: 13,
    title: "Bold Beaded Bracelets",
    price: 89.99,
    description: "Bold beaded bracelets with intricate designs",
    category: "jewelery",
    image: Jewelery_4,
    rating: { rate: 4.8, count: 92 },
  },
  {
    id: 14,
    title: "Full HD Smart Monitor",
    price: 699.99,
    discountprice: 750.00,
    description:
      'Dell 24 Plus Monitor 23.8" 1080p FHD 100Hz IPS Anti-glare Computer Display White, S2425HS',
    category: "electronics",
    image: Electronics_4,
    rating: { rate: 4.6, count: 200 },
  },
  {
    id: 15,
    title: "Summer Dress",
    price: 39.99,
    description: "Lightweight summer dress with floral pattern",
    category: "women's clothing",
    image: Female_4,
    rating: { rate: 4.6, count: 92 },
  },
  {
    id: 16,
    title: "Casual Shirt",
    price: 29.99,
    description: "Comfortable casual shirt for everyday wear",
    category: "men's clothing",
    image: Male_4,
    rating: { rate: 4.4, count: 78 },
  },
  {
    id: 17,
    title: "Smartphone with 1TB Storage",
    price: 34.99,
    description:
      "Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI (Titanium Silverblue, 12GB RAM, 1TB Storage), Titanium Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual Engine and 5000mAh Battery",
    category: "electronics",
    image: Electronics_5,
    rating: { rate: 4.9, count: 120 },
  },
  {
    id: 18,
    title: "DIEZI Bohemian Opened LOVE Heart Necklace Women Vintage Choker Necklace Jewelry",
    price: 79.99,
    description: "Bohemian style opened heart necklace with vintage charm",
    category: "jewelery",
    image: Jewelery_5,
    rating: { rate: 4.9, count: 120 },
  },
  {
    id: 19,
    title: "Denim Jacket",
    price: 79.99,
    discountprice: 85.00,
    description: "Classic denim jacket with a modern fit",
    category: "men's clothing",
    image: Male_5,
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: 20,
    title: "Women's Stylish Tops",
    price: 89.99,
    description: "Elegant tops for women",
    category: "women's clothing",
    image: Female_5,
    rating: { rate: 4.8, count: 85 },
  },
  {
    id: 21,
    title: "3D Printer with High Precision",
    price: 199.99,
    discountprice: 250.00,
    description: "3D printer with high precision and advanced features",
    category: "electronics",
    image: Electronics_6,
    rating: { rate: 4.7, count: 150 },
  },
  {
    id: 22,
    title: "Fantastic Women's American Dress",
    price: 59.99,
    description:
      "Stylish American dress for women with a modern design and comfortable fit for everyday wear and special occasions.",
    category: "women's clothing",
    image: Female_6,
    rating: { rate: 4.5, count: 110 },
  },
  {
    id: 23,
    title: "Men's Winter Jacket",
    price: 69.99,
    discountprice: 80.00,
    description:
      "Stylish winter jacket for men with a modern fit and comfortable design, perfect for cold weather. Ideal for outdoor activities and casual wear. Available in various sizes and colors.",
    category: "men's clothing",
    image: Male_6,
    rating: { rate: 4.6, count: 110 },
  },
  {
    id: 24,
    title: "KISS WIFE Gold Knuckle Rings Set for Women",
    price: 69.99,
    description: "Elegant gold rings set with intricate design",
    category: "jewelery",
    image: Jewelery_6,
    rating: { rate: 4.6, count: 110 },
  },
];

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const controls = useAnimation(); // Controls for the product grid animation
  const dispatch = useDispatch();

  useEffect(() => {
    setData(customProducts);
    setFilter(customProducts);

    // Initial animation sequence for products
    controls.start({
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    });
  }, [controls]); // Add controls to dependency array as recommended by ESLint

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("🛒 Added to cart!", {
      position: "bottom-right",
      style: {
        background: "#333",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      },
    });
  };

  const filterProduct = async (cat, name) => {
    // Exit animation for current products
    await controls.start({
      opacity: 0,
      transition: { duration: 0.2 }, // Make exit faster
    });

    const updatedList = cat === "All" ? data : data.filter((item) => item.category === cat);
    setFilter(updatedList);
    setActiveFilter(name);

    // Re-enter animation for new filtered products
    controls.start({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }, // Added delayChildren for a smoother entrance after filter change
    });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardHover = {
    y: -10,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  };

  const imageHover = {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
    },
  };

  const buttonTap = {
    scale: 0.95,
    transition: { duration: 0.2 },
  };

  const priceAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const starAnimation = (i) => ({
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4 + i * 0.05,
        type: "spring",
        stiffness: 500,
        damping: 10,
      },
    },
    hover: { scale: 1.2 },
  });

  const discountBadge = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: -15, // Adjusted slightly for visual appeal
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="container my-5 py-4">
      {/* Page Title and Description Section */}
      <motion.div
        className="row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="col-12 text-center mb-5">
          <motion.h2
            className="display-4 font-weight-bold gradient-text"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
            }}
          >
            Discover Our Collection
          </motion.h2>
          <motion.p
            className="lead text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            Handpicked items for your style and needs
          </motion.p>
          <motion.div
            className="mx-auto my-4"
            style={{ width: "100px", height: "4px", background: "linear-gradient(90deg, #ff8a00, #e52e71)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          />
        </div>
      </motion.div>

      {/* Filter Buttons Section */}
      <motion.div
        className="buttons text-center py-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      >
        {["All", "Men's Clothing", "Women's Clothing", "Jewelery", "Electronics"].map((name) => {
          const categoryMap = {
            All: "All",
            "Men's Clothing": "men's clothing",
            "Women's Clothing": "women's clothing",
            Jewelery: "jewelery",
            Electronics: "electronics",
          };

          return (
            <motion.button
              key={name}
              className={`btn btn-lg m-2 px-4 py-2 rounded-pill ${
                activeFilter === name ? "btn-dark" : "btn-outline-dark"
              }`}
              onClick={() => filterProduct(categoryMap[name], name)}
              whileHover={buttonHover}
              whileTap={buttonTap}
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: name === "All" ? 0 : 0.1 * ["All", "Men's Clothing", "Women's Clothing", "Jewelery", "Electronics"].indexOf(name),
              }}
            >
              {name}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Products Grid Section */}
      <motion.div
        className="row justify-content-center"
        // Using controls for direct animation management, not container variants here for the filter effect
        // variants={container} // Removed: using controls directly for dynamic filtering animations
        initial="hidden" // Ensures it starts hidden, then controls take over
        animate={controls}
      >
        <AnimatePresence mode="wait"> {/* 'wait' mode ensures exit animation completes before new components enter */}
          {filter.map((product) => (
            <motion.div
              key={product.id}
              className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex align-items-stretch"
              variants={item} // Apply item variants for each product
              layout // Enables smooth layout transitions (position changes)
              initial="hidden" // Start each item hidden
              animate="show" // Animate each item to show
              exit="hidden" // Animate each item out when removed from the filter
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <motion.div
                className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden product-card position-relative"
                whileHover={cardHover}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
              >
                {/* Discount Badge */}
                {product.discountprice && product.discountprice > product.price && (
                  <motion.div
                    className="discount-badge"
                    variants={discountBadge}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ rotate: 0 }} // Reset rotation on badge hover
                  >
                    {Math.round((1 - product.price / product.discountprice) * 100)}% OFF
                  </motion.div>
                )}

                <div className="product-image-container position-relative overflow-hidden">
                  <motion.img
                    className="card-img-top p-3 img-fluid"
                    src={product.image}
                    alt={product.title}
                    style={{ objectFit: "contain", height: "250px" }}
                    animate={hoveredProduct === product.id ? imageHover : { scale: 1 }} // Add default scale to reset
                  />

                  {/* Quick View Overlay */}
                  {hoveredProduct === product.id && (
                    <motion.div
                      className="quick-view-overlay d-flex align-items-center justify-content-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-light btn-lg rounded-pill px-4"
                        state={{
                          fromProducts: true,
                          product: product,
                          similarProducts: data.filter(
                            (item) => item.category === product.category && item.id !== product.id
                          ),
                        }}
                      >
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          Quick View →
                        </motion.span>
                      </Link>
                    </motion.div>
                  )}
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title font-weight-bold mb-2">
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {product.title}
                    </motion.span>
                  </h5>

                  <p className="card-text text-muted mb-3 flex-grow-1">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      {product.description.substring(0, 70)}...
                    </motion.span>
                  </p>

                  {/* Price with animation */}
                  <motion.div
                    className="price-container mb-2"
                    variants={priceAnimation}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="current-price">${product.price.toFixed(2)}</span>
                    {product.discountprice && product.discountprice > product.price && (
                      <span className="original-price">${product.discountprice.toFixed(2)}</span>
                    )}
                  </motion.div>

                  {/* Enhanced Rating Display */}
                  <div className="rating-container">
                    <motion.div
                      className="stars"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {[1, 2, 3, 4, 5].map((star, i) => (
                        <motion.span
                          key={star}
                          className={`star ${star <= Math.floor(product.rating.rate) ? 'filled' : ''}`}
                          variants={starAnimation(i)}
                          initial="hidden"
                          animate="visible"
                          whileHover="hover"
                        >
                          {star <= Math.floor(product.rating.rate) ? (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              ★
                            </motion.span>
                          ) : star - 0.5 <= product.rating.rate ? (
                            <motion.span
                              className="half-star"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ delay: 0.1, duration: 0.3 }} // Added duration for half-star fill
                            >
                              ★
                            </motion.span>
                          ) : (
                            "☆"
                          )}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div
                      className="rating-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <span className="rating-number">{product.rating.rate.toFixed(1)}</span>
                      <span className="rating-count">({product.rating.count} reviews)</span>
                    </motion.div>
                  </div>

                  <div className="d-flex gap-2 mt-3">
                    <motion.button
                      className="btn btn-dark btn-sm flex-fill"
                      onClick={() => addProduct(product)}
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <motion.span
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        Add to Cart
                      </motion.span>
                    </motion.button>
                    <motion.button
                      className="btn btn-outline-dark btn-sm flex-fill details-button"
                      whileHover={buttonHover} // Keep buttonHover for consistent box-shadow/scale
                      whileTap={buttonTap}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.75 }}
                    >
                      <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none text-black w-100 d-flex align-items-center justify-content-center" // Ensure link fills button & centers content
                        state={{
                          fromProducts: true,
                          product: product,
                          similarProducts: data.filter(
                            (item) => item.category === product.category && item.id !== product.id
                          ),
                        }}
                      >
                        <motion.span
                          whileHover={{ x: 2 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          Details
                        </motion.span>
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        .product-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .product-image-container {
          position: relative;
          overflow: hidden;
          background: #f8f9fa;
          border-radius: 12px 12px 0 0;
        }

        .quick-view-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }

        .discount-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #ff4757;
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          font-weight: bold;
          z-index: 2;
          transform-origin: center;
        }

        .price-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .current-price {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2a2a2a;
        }

        .original-price {
          font-size: 1rem;
          text-decoration: line-through;
          color: #999;
        }

        .rating-container {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }

        .stars {
          display: flex;
          position: relative;
        }

        .star {
          color: #e4e5e9;
          font-size: 1.1rem;
          position: relative;
          margin-right: 2px;
        }

        .star.filled {
          color: #ffb400;
        }

        .half-star {
          position: absolute;
          left: 0;
          width: 50%;
          overflow: hidden;
          color: #ffb400;
        }

        .rating-text {
          font-size: 0.9rem;
          color: #666;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .rating-number {
          font-weight: bold;
          color: #333;
        }

        .rating-count {
          color: #888;
          font-size: 0.8rem;
        }

        .gradient-text {
          background: linear-gradient(90deg, #ff8a00, #e52e71);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-outline-dark {
          border-width: 2px;
        }

        /* Custom styles for the Details button */
        .details-button {
          background-color: white; /* Initial background */
          color: black !important; /* Initial text color */
          border-color: #212529; /* Initial border color */
        }

        /* Hover state for the Details button */
        .details-button:hover {
          background-color: #212529; /* Black background on hover */
        }

        /* Ensure the Link component inside the button takes up full width/height */
        .details-button .text-decoration-none {
          height: 100%;
          /* d-flex, align-items-center, justify-content-center classes already applied in JSX */
        }

        /* Adjust the Link's text color on hover. This overrides the direct Link text color */
        .details-button:hover .text-black {
          color: white !important; /* White text on hover for the Link content */
        }

        @media (max-width: 768px) {
          .buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .buttons button {
            margin: 5px;
            padding: 8px 16px;
            font-size: 0.9rem;
          }

          .star {
            font-size: 0.9rem;
          }

          .rating-text {
            font-size: 0.8rem;
          }

          .current-price {
            font-size: 1.1rem;
          }

          .quick-view-overlay .btn {
            font-size: 0.9rem;
            padding: 0.25rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;