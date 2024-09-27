import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false);

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

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="flex justify-between items-center mr-48">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/Artboard 2@4x.png" 
              alt="ANT General Trading" 
              className="object-contain transition-transform duration-300 transform hover:scale-105" 
              style={{ width: '160px', height: 'auto', marginLeft: '10rem', boxShadow: '0 4px 20px rgba(255, 255, 255, 0.5)' }} 
            />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`flex space-x-4 py-2 ${menuActive ? 'active' : ''}`}>
          {/* Home */}
          <li className="relative">
            <Link to="/" className="nav-link mr-16">Home</Link>
          </li>

          {/* About Us Dropdown */}
          <li className="relative group">
            <Link to="#" className="nav-link mr-16">About Us</Link>
            <div className="aboutdropdown">
              <Link to="/about-us" className="aboutdropdown-link">Who We Are</Link>
              <Link to="/why-work-with-us" className="aboutdropdown-link">Why Work With Us</Link>
              <a
                href="/Company Profile.pdf" // Ensure this points correctly to the public folder
                className="aboutdropdown-link"
                download
              >
                Company Profile
              </a>
            </div>
          </li>

          {/* Products & Services Dropdown */}
          <li className="relative group">
            <Link to="#" className="nav-link mr-16">Products & Services</Link>
            <div className="products-services-dropdown">
              <div className="category">
                <Link to="#" className="dropdown-link">Pharmaceuticals & Healthcare</Link>
                <div className="sub-dropdown">
                  <Link to="/pharma-product" className="sub-dropdown-link">Products</Link>
                  <Link to="/pharma-service" className="sub-dropdown-link">Services</Link>
                </div>
              </div>
              <div className="category">
                <Link to="#" className="dropdown-link">Export Trade</Link>
                <div className="sub-dropdown">
                  <Link to="/export-trade-product" className="sub-dropdown-link">Products</Link>
                  <Link to="/export-trade-service" className="sub-dropdown-link">Services</Link>
                </div>
              </div>
              <div className="category">
                <Link to="#" className="dropdown-link">Agriculture & Food Processing</Link>
                <div className="sub-dropdown">
                  <Link to="/agricultureproduct" className="sub-dropdown-link">Products</Link>
                  <Link to="/agricultureservice" className="sub-dropdown-link">Services</Link>
                </div>
              </div>
            </div>
          </li>

          {/* Contact */}
          <li>
            <Link to="/contact" className="nav-link mr-16">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
