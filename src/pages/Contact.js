import React, { useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaTelegram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Contact() {
  // Scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center mb-6 hover:text-gray-600 transition-colors duration-300">Contact</h1>

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
        <p className="block text-[#0E74A4] flex justify-center items-center"> Addis Ketema, Wereda :05, H.No:261/41 ,Near addis Micheal church.</p>


          
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
            href="https://WhatsApp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 flex justify-center items-center"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
          <a
            href="https://telegram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0E74A4] flex justify-center items-center"
          >
            <FaTelegram className="mr-2" /> Telegram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 flex justify-center items-center"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>

      {/* Main Content: Map on the left and Form on the right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 items-start">
        {/* Google Map Embed */}
                <div className="w-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.475850291147!2d38.7284555!3d9.0407886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b856121d3fd1d3%3A0x420751d979ff32c8!2s9%C2%B002%2726.8%22N%2038%C2%B043%2751.7%22E!5e0!3m2!1sen!2set!4v1695671298210!5m2!1sen!2set"
            width="100%"
            height="600" // Increased height
            allowFullScreen=""
            loading="lazy"
            className="border-0 rounded-lg shadow-lg"
          ></iframe>
        </div>


        {/* Contact Form */}
        <div className="w-full bg-gray-100 p-11 rounded-lg shadow-md hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold text-center 4">Send Us a Message</h2>
          <form className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 p-2 ">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full p-2 border-gray-300 rounded-lg shadow-sm focus:ring-[#0E74A4] focus:border-[#0E74A4]"
                placeholder="Enter your email"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700 p-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full p-2 border-gray-300 rounded-lg shadow-sm focus:ring-[#0E74A4] focus:border-[#0E74A4]"
                placeholder="Enter subject"
              />
            </div>

            {/* Comment/Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 p-2">Comment/Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="mt-1 block w-full p-2 border-gray-300 rounded-lg shadow-sm focus:ring-[#0E74A4] focus:border-[#0E74A4]"
                placeholder="Type your message here"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="mt-6 px-10 py-3 bg-[#0E74A4] text-white rounded-lg shadow hover:bg-[#074D7B] transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
