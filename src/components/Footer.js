import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between">
        <div className="mb-6 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="mb-2">
            <a href="tel:+251992454545" className="hover:text-[#0E74A4]">+251-992-45-45-45</a>
          </p>
          <p className="mb-2">
            <a href="tel:+251996797979" className="hover:text-[#0E74A4]">+251-996-79-79-79</a>
          </p>
          <p className="mb-2">
            <a href="mailto:coffee@praxis.com.et" className="hover:text-[#0E74A4]">coffee@praxis.com.et</a>
          </p>
        </div>

        <div className="mb-6 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#company-profile" className="hover:text-[#0E74A4]">Company Profile</a></li>
            <li><a href="#our-products" className="hover:text-[#0E74A4]">Our Products</a></li>
            <li><a href="#sales-procedure" className="hover:text-[#0E74A4]">Sales Procedure</a></li>
          </ul>
        </div>

        <div className="mb-6 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-[#0E74A4] hover:underline">
              LinkedIn
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-[#0E74A4] hover:underline">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-[#0E74A4] hover:underline">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4 mt-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm mb-2 md:mb-0 text-center">&copy; 2023 Praxis. All Rights Reserved.</p>
          <div className="text-sm mt-2 md:mt-0">
            <a href="#terms" className="hover:text-[#0E74A4]">Terms of Service</a> | <a href="#privacy" className="hover:text-[#0E74A4]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
