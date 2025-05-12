import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import '../css/Navbar.css';

export default function Navbar() {
  const [isScrolledPastHeader, setIsScrolledPastHeader] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const headerHeight = 250;
        setIsScrolledPastHeader(window.scrollY > headerHeight);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolledPastHeader(true);
    }
  }, [isHomePage]);

  const isSticky = isScrolledPastHeader;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        {isSticky && <h1 className="navbar-title">Humboldt Grange #501</h1>}

        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        <div className={`nav-links ${isSticky ? 'shifted' : 'centered'}`}>
          <Link to="/">Home</Link>
          
          <div className="nav-item">
            <Link to="/about" className="dropdown-toggle">About</Link>
            <div className="dropdown-menu">
              <Link to="/about/history">Our History</Link>
              <Link to="/about/officers">Our Officers</Link>
              <Link to="/about/humboldt-county-granges">Humboldt County Granges</Link>
            </div>
          </div>

          <Link to="/membership">Join Us</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/rentals">Rentals</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={closeMobileMenu}>&times;</button>
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
          <Link to="/about/history" onClick={closeMobileMenu}>Our History</Link>
          <Link to="/about/officers" onClick={closeMobileMenu}>Our Officers</Link>
          <Link to="/about/humboldt-county-granges" onClick={closeMobileMenu}>Humboldt County Granges</Link>
          <Link to="/membership" onClick={closeMobileMenu}>Join Us</Link>
          <Link to="/calendar" onClick={closeMobileMenu}>Calendar</Link>
          <Link to="/rentals" onClick={closeMobileMenu}>Rentals</Link>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
          <Link to="/login" onClick={closeMobileMenu} id="login-icon-nav">Login</Link>

        </div>
      )}
    </>
  );
}
