import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    aboutUs: false,
    productsServices: false,
    pharmaDropdown: false,
    exportTradeDropdown: false,
    agricultureDropdown: false,
  });

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

  // Toggle the mobile menu (hamburger)
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Handle opening and closing dropdowns on click
  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  // Close the menu and dropdowns when a link is clicked
  const closeMenu = () => {
    setMenuActive(false);
    setDropdownOpen({ aboutUs: false, productsServices: false, pharmaDropdown: false, exportTradeDropdown: false, agricultureDropdown: false });
  };

  // Handle mouse enter and leave for dropdowns
  const handleMouseEnter = (dropdown) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: true,
    }));
  };

  const handleMouseLeave = (dropdown) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: false,
    }));
  };

  return (
    <nav className="navbar bg-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/Artboard 2@4x.png"
              alt="ANT General Trading"
              className="object-contain transition-transform duration-300 transform hover:scale-105"
              style={{ width: '160px', height: 'auto', boxShadow: '0 4px 20px rgba(255, 255, 255, 0.5)' }}
            />
          </Link>
        </div>

        {/* Hamburger menu visible on small screens */}
        <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navbar menu - hidden on small screens */}
        <ul className={`flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 py-2 sm:flex transition-transform duration-300 ${menuActive ? 'flex' : 'hidden'} sm:space-x-4`}>
          {/* Home */}
          <li className="relative">
            <Link to="/" className="nav-link mr-24" onClick={closeMenu}>Home</Link>
          </li>

          {/* About Us Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter('aboutUs')}
            onMouseLeave={() => handleMouseLeave('aboutUs')}
          >
            <Link to="#" className="nav-link mr-24" onClick={() => toggleDropdown('aboutUs')}>About Us</Link>
            {(dropdownOpen.aboutUs || dropdownOpen.productsServices) && (
              <div className="aboutdropdown">
                <Link to="/about-us" className="aboutdropdown-link" onClick={closeMenu}>Who We Are</Link>
                <Link to="/why-work-with-us" className="aboutdropdown-link" onClick={closeMenu}>Why Work With Us</Link>
                <a
                  href="/Company Profile.pdf"
                  className="aboutdropdown-link"
                  download
                  onClick={closeMenu}
                >
                  Company Profile
                </a>
              </div>
            )}
          </li>

          {/* Products & Services Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter('productsServices')}
            onMouseLeave={() => handleMouseLeave('productsServices')}
          >
            <Link to="#" className="nav-link mr-24" onClick={() => toggleDropdown('productsServices')}>Products & Services</Link>
            {dropdownOpen.productsServices && (
              <div className="products-services-dropdown">
                <div className="category" onMouseEnter={() => handleMouseEnter('pharmaDropdown')} onMouseLeave={() => handleMouseLeave('pharmaDropdown')}>
                  <Link to="#" className="dropdown-link" onClick={() => toggleDropdown('pharmaDropdown')}>Pharmaceuticals & Healthcare</Link>
                  {dropdownOpen.pharmaDropdown && (
                    <div className="sub-dropdown">
                      <Link to="/pharma-product" className="sub-dropdown-link" onClick={closeMenu}>Products</Link>
                      <Link to="/pharma-service" className="sub-dropdown-link" onClick={closeMenu}>Services</Link>
                    </div>
                  )}
                </div>
                <div className="category" onMouseEnter={() => handleMouseEnter('exportTradeDropdown')} onMouseLeave={() => handleMouseLeave('exportTradeDropdown')}>
                  <Link to="#" className="dropdown-link" onClick={() => toggleDropdown('exportTradeDropdown')}>Export Trade</Link>
                  {dropdownOpen.exportTradeDropdown && (
                    <div className="sub-dropdown">
                      <Link to="/export-trade-product" className="sub-dropdown-link" onClick={closeMenu}>Products</Link>
                      <Link to="/export-trade-service" className="sub-dropdown-link" onClick={closeMenu}>Services</Link>
                    </div>
                  )}
                </div>
                <div className="category" onMouseEnter={() => handleMouseEnter('agricultureDropdown')} onMouseLeave={() => handleMouseLeave('agricultureDropdown')}>
                  <Link to="#" className="dropdown-link" onClick={() => toggleDropdown('agricultureDropdown')}>Agriculture & Food Processing</Link>
                  {dropdownOpen.agricultureDropdown && (
                    <div className="sub-dropdown">
                      <Link to="/agricultureproduct" className="sub-dropdown-link" onClick={closeMenu}>Products</Link>
                      <Link to="/agricultureservice" className="sub-dropdown-link" onClick={closeMenu}>Services</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>

          {/* Contact */}
          <li>
            <Link to="/contact" className="nav-link mr-24" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
