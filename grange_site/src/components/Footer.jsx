import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-buttons">
            <Link to="/membership" className="footer-btn">Become a Member</Link>
            <Link to="/contact#contactTop" className="footer-btn">Contact Us</Link>
        </div>
        <p>© {new Date().getFullYear()} Humboldt Grange #501. All rights reserved.</p>
      </div>
      <a
        href="https://www.facebook.com/humboldt.grange/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          backgroundColor: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
        }}>
            <FaFacebookSquare size={34} color="#1877f2" />
        </a>
    </footer>
  );
}
