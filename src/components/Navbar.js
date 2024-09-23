import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  // Scroll to the correct section on route change with an offset
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const yOffset = -130; // Adjust this value based on your navbar height or desired margin
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0); // Scroll to top on route change (if no hash)
    }
  }, [location]);

  return (
    <nav className="navbar">
      <div className="flex justify-between items-center mr-48">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/Artboard 2@4x.png" 
              alt="ANT General Trading" 
              className="object-contain transition-transform duration-300 transform hover:scale-105" 
              style={{ width: '160px',
                 height: 'auto', 
                 marginLeft: '10rem',
                 boxShadow: '0 4px 20px rgba(255, 255, 255, 0.5)'
                 }} 
            />
          </Link>
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

          {/* About Us Dropdown */}
          <li className="relative group">
            <Link to="#" className="nav-link mr-16">
              About Us
            </Link>
            <div className="aboutdropdown">
              <Link to="/about-us" className="aboutdropdown-link">
                Who We Are
              </Link>
              <Link to="/why-work-with-us" className="aboutdropdown-link">
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
