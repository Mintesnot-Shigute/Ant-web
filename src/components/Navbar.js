import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="flex justify-between items-center mr-48">
        <div className="flex items-center">
          <img 
            src="/Artboard 2@4x.png" 
            alt="ANT General Trading" 
            className="object-contain" 
            style={{ width: '160px', height: 'auto', marginLeft: '10rem' }} 
          />
        </div>

        <ul className="flex space-x-4 py-2">
          {/* Home */}
          <li className="relative">
            <Link to="/" className="nav-link mr-16">
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative group">
            <Link to="#" className="nav-link mr-16">
              Services
            </Link>
            <div className="dropdown">
              <Link to="/pharma-healthcare#services" className="dropdown-link">
                Pharmaceuticals & Healthcare Services
              </Link>
              <Link to="/export-trade#services" className="dropdown-link">
                Export Trade Services
              </Link>
              <Link to="/agriculture#services" className="dropdown-link">
                Agriculture & Food Processing Services
              </Link>
            </div>
          </li>

          {/* Products Dropdown */}
          <li className="relative group">
            <Link to="#" className="nav-link mr-16">
              Products
            </Link>
            <div className="dropdown">
              <Link to="/pharma-healthcare#products" className="dropdown-link">
                Pharmaceuticals & Healthcare Products
              </Link>
              <Link to="/export-trade#products" className="dropdown-link">
                Export Trade Products
              </Link>
              <Link to="/agriculture#products" className="dropdown-link">
                Agriculture & Food Processing Products
              </Link>
            </div>
          </li>

          {/* About Us */}
          <li className="relative">
            <Link to="/about-us" className="nav-link mr-12">
              About Us
            </Link>
            <div className="aboutdropdown">
              <Link to="/why-work-with-us" className="dropdown-link">
                Why Work With Us?
              </Link>
            </div>
          </li>

          {/* Contact */}
          <li>
            <Link to="/contact" className="nav-link mr-16">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
