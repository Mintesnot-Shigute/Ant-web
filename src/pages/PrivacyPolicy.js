import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  // Scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center mb-6 hover:text-gray-600 transition-colors duration-300">Privacy Policy</h1>

      {/* Breadcrumb */}
      <div className="flex justify-center mb-4 text-gray-500">
        <Link to="/"><span className="mr-2">Home</span></Link>
        <span>/</span>
        <span className="ml-2">Privacy Policy</span>
      </div>

      <p className="text-lg mb-6 text-center">
        ANT General Trading and Industries Holding Privacy Policy
      </p>

      <p className="text-lg mb-4">
        At ANT General Trading and Industries Holding, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.
      </p>

      <ol className="list-decimal pl-8 mb-8">
        <li className="mb-4">
          <strong>Information We Collect</strong>
          <ul className="list-disc pl-6">
            <li>Personal Information: When you visit our site, we may collect personal information such as your name, email address, and phone number when you voluntarily provide it through contact forms or subscription sign-ups.</li>
            <li>Non-Personal Information: We may also collect non-personal information such as your IP address, browser type, operating system, and usage data to help us understand how our website is used.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>How We Use Your Information</strong>
          <p>We may use the information we collect to:</p>
          <ul className="list-disc pl-6">
            <li>Improve our website and services.</li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Send promotional emails or other communications if you have opted in to receive them.</li>
            <li>Analyze user trends and site usage.</li>
          </ul>
        </li>
        <li className="mb-4">
          <strong>Cookies and Tracking Technologies</strong>
          <p>Our website uses cookies to enhance user experience. Cookies are small files stored on your computer that help us track usage patterns and deliver personalized content. You can disable cookies through your browser settings, but doing so may affect the functionality of the site.</p>
        </li>
        <li className="mb-4">
          <strong>Sharing of Information</strong>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties, except as required by law or to trusted third parties who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.</p>
        </li>
        <li className="mb-4">
          <strong>Data Security</strong>
          <p>We implement a variety of security measures to ensure the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
        </li>
        <li className="mb-4">
          <strong>Third-Party Links</strong>
          <p>Our website may include links to third-party websites. We do not have control over those websites and are not responsible for their privacy practices. We encourage you to review the privacy policies of those third-party sites.</p>
        </li>
        <li className="mb-4">
          <strong>Changes to This Policy</strong>
          <p>We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website following any updates indicates your acceptance of the revised policy.</p>
        </li>
        <li className="mb-4">
          <strong>Contact Us</strong>
          <p>If you have any questions about this Privacy Policy or the information we hold about you, please contact us at <a href="mailto:info@ANT-holding.com.et" className="text-[#0E74A4]">info@ANT-holding.com.et</a>.</p>
        </li>
      </ol>
    </div>
  );
}

export default PrivacyPolicy;
