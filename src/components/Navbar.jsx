import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../assets/images/NUB_Logo.png';
import '../assets/css/nav.css';

const Navbar = () => {
  const state = useSelector(state => state.handleCart);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) closeMenu();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  return (
    <nav className={`custom-navbar ${menuOpen ? 'open' : ''}`}>
      <div className="container navbar-container">
        <NavLink className="brand-logo" to="/" onClick={closeMenu}>
          <img src={Logo} alt="Logo" className="logo-img animated-logo" />
        </NavLink>

        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active animated-fade-slide' : ''}`}>
          <ul className="nav-links">
            <li><NavLink onClick={closeMenu} to="/" className="nav-animated">Home</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/product" className="nav-animated">Products</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/about" className="nav-animated">About</NavLink></li>
            <li><NavLink onClick={closeMenu} to="/contact" className="nav-animated">Contact</NavLink></li>
          </ul>

          <div className="nav-buttons">
            <NavLink to="/login" className="nav-btn pulse bttn" onClick={closeMenu}>
              <i className="fa fa-sign-in-alt"></i> Login
            </NavLink>
            <NavLink to="/register" className="nav-btn pulse bttn" onClick={closeMenu}>
              <i className="fa fa-user-plus"></i> Register
            </NavLink>
            <NavLink to="/cart" className="nav-btn pulse bttn" onClick={closeMenu}>
              <i className="fa fa-cart-shopping"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
