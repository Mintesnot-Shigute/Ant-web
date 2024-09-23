import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaTelegram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';



function Contact() {
  // Scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to manage modal visibility
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Function to handle image click
  const handleImageClick = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center mb-6">Contact</h1>

      {/* Breadcrumb */}
      <div className="flex justify-center mb-4 text-gray-500">
      <Link to="/"><span className="mr-2">Home</span></Link>
        <span>/</span>
        <span className="ml-2">Contact</span>
      </div>

      <p className="text-center text-lg mb-12">
        Monday — Saturday: 8:30 am – 5:30 pm
      </p>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-12">
        {/* Email & Phone */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-4">EMAIL & PHONE</h2>
          <a href="mailto:info@ANT-holding.com.et" className="block mb-2 text-[#0E74A4]">
            info@ANT-holding.com.et
          </a>
          <a href="tel:+251911213682" className="block mb-1 text-[#0E74A4] flex justify-center items-center">
            <FaPhoneAlt className="mr-2" /> +251-911-213-682
          </a>
          <a href="tel:+251911220634" className="block text-[#0E74A4] flex justify-center items-center">
            <FaPhoneAlt className="mr-2" /> +251-911-220-634
          </a>
        </div>

        {/* Visit Us */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-4">VISIT US</h2>
          <a
            href="https://www.google.com/maps/place/Addis+Ababa,+Ethiopia"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#0E74A4]"
          >
            Bole Road , African Avenue, Bole Ruwanda
          </a>
        </div>

        {/* Chat With Us */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-4">CHAT WITH US</h2>
          <a
            href="https://wa.me/+251911213682"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2 text-[#0E74A4] flex justify-center items-center"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp: +251-911-213-682
          </a>
          <a
            href="https://telegram.me/+251911220634"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[#0E74A4] flex justify-center items-center"
          >
            <FaTelegram className="mr-2" /> Telegram: +251-911-220-634
          </a>
        </div>

        {/* Social Media */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-4">SOCIAL MEDIA</h2>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0E74A4] flex justify-center items-center"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="flex justify-center">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.4386728406127!2d38.7635383!3d9.027598499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85612b7fd1d3%3A0x420751d979ff32c8!2sPRAXIS%20COFFEE%20-%20ETHIOPIA!5e0!3m2!1sen!2set!4v1630444480971!5m2!1sen!2set"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="border-0 rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* CEO and Executive Chairman Images */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CEO */}
        <div className="flex flex-col items-center">
          <img
            src="CEO.png"
            alt="CEO"
            className="rounded-lg shadow-lg mb-4 w-full max-w-xs cursor-pointer hover:shadow-xl hover:scale-105 transition-transform"
            onClick={() => handleImageClick('CEO.png')}
          />
          <h3 className="text-xl font-semibold">CEO</h3>
        
        </div>

        {/* Executive Chairman */}
        <div className="flex flex-col items-center">
          <img
            src="chairman.png"
            alt="Executive Chairman"
            className="rounded-lg shadow-lg mb-4 w-full max-w-xs cursor-pointer hover:shadow-xl hover:scale-105 transition-transform"
            onClick={() => handleImageClick('chairman.png')}
          />
          <h3 className="text-xl font-semibold">Executive Chairman</h3>
    
        </div>
      </div>

      {/* Modal for Image Display */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged View" className="rounded-lg max-w-3xl" />
        </div>
      )}
    </div>
  );
}

export default Contact;
