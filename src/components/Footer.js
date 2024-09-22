import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1B3855' }} className="#1B3855 text-white py-4 mb-0">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between">
        <div className="mb-6 lg:mb-0 flex items-center">
        <img 
  src="/Artboard 2@4x.png" 
  alt="ANT General Trading" 
  className="object-contain transition-transform duration-300 transform hover:scale-105"
  style={{ 
    width: '130px', 
    height: 'auto', 
    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.5)' // Custom white shadow
  }} 
/>

        </div>

        <div className="mb-6 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="mb-2">
            <a href="tel:+251992454545" className="hover:text-[#0E74A4]">+251-992-45-45-45</a>
          </p>
          <p className="mb-2">
            <a href="tel:+251996797979" className="hover:text-[#0E74A4]">+251-996-79-79-79</a>
          </p>
          <p className="mb-2">
            <a href="mailto:info@ANT-holding.com.et" className="hover:text-[#0E74A4]">info@ANT-holding.com.et</a>
          </p>
        </div>

        <div className="mb-6 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#0E74A4]">Home</Link></li>
            <li><Link to="/pharma-healthcare-services" className="hover:text-[#0E74A4]">Pharmaceuticals & Healthcare Services</Link></li>
            <li><Link to="/export-trade-services" className="hover:text-[#0E74A4]">Export Trade Services</Link></li>
            <li><Link to="/agriculture-services" className="hover:text-[#0E74A4]">Agriculture & Food Processing Services</Link></li>
            <li><Link to="/about-us" className="hover:text-[#0E74A4]">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#0E74A4]">Contact</Link></li>
          </ul>
        </div>

        <div className="mb-6 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-[#0E74A4] hover:underline">LinkedIn</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-[#0E74A4] hover:underline">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-[#0E74A4] hover:underline">Twitter</a>
          </div>
        </div>
      </div>

          <div style={{ backgroundColor: '#1B3855' }} className="py-0 mt-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center">
        <div className="text-sm mb-2 md:mb-0 text-center w-full text-white">
          &copy; 2024 ANT General Trading and Industries Holding. All Rights Reserved.
        </div>
        <div className="text-sm mt-2 md:mt-0 text-white">
          <Link to="/terms" className="hover:text-[#0E74A4]">Terms of Service</Link> | <Link to="/privacy" className="hover:text-[#0E74A4]">Privacy Policy</Link>
        </div>
      </div>
    </div>

    </footer>
  );
}

export default Footer;
