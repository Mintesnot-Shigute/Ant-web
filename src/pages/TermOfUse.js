import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TermsOfUse() {
  // Scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-center mb-6 hover:text-gray-600 transition-colors duration-300">Terms of Use</h1>

      {/* Breadcrumb */}
      <div className="flex justify-center mb-4 text-gray-500">
        <Link to="/"><span className="mr-2">Home</span></Link>
        <span>/</span>
        <span className="ml-2">Terms of Use</span>
      </div>

      <p className="text-lg mb-6 text-center">
        Welcome to ANT General Trading and Industries
      </p>

      <p className="text-lg mb-4">
        These Terms of Use govern your access to and use of our website, including any content, features, and services offered on or through our site. By using our website, you agree to comply with these Terms of Use.
      </p>

      <ol className="list-decimal pl-8 mb-8">
        <li className="mb-4">
          <strong>Acceptance of Terms</strong>
          <p>By accessing or using our website, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, you may consider not to use our site.</p>
        </li>
        <li className="mb-4">
          <strong>Use of Website</strong>
          <p>You agree to use our website only for lawful purposes. You shall not use the website in any manner that could damage, disable, overburden, or impair the site or interfere with any other party’s use of the website. You are prohibited from using the website to transmit any unlawful, threatening, defamatory, or otherwise objectionable content.</p>
        </li>
        <li className="mb-4">
          <strong>Intellectual Property Rights</strong>
          <p>The content, design, structure, graphics, and layout of our website are protected by copyright, trademark, and other intellectual property rights. You are not permitted to modify, copy, reproduce, distribute, republish, display, or transmit any part of the website without our prior written permission.</p>
        </li>
        <li className="mb-4">
          <strong>User Submissions</strong>
          <p>Any information, feedback, suggestions, or other content that you submit to us through our website will be considered non-confidential and non-proprietary. We have the right to use such submissions for any purpose without compensation or acknowledgment to you.</p>
        </li>
        <li className="mb-4">
          <strong>Links to Third-Party Sites</strong>
          <p>Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility or liability for them or for any loss or damage that may arise from your use of them.</p>
        </li>
        <li className="mb-4">
          <strong>Disclaimer of Warranties</strong>
          <p>Our website is provided on an "as-is" and "as available" basis without any warranties of any kind. We do not warrant that the website will be uninterrupted or error-free, nor do we make any warranties as to the accuracy or reliability of any information on the site.</p>
        </li>
        <li className="mb-4">
          <strong>Limitation of Liability</strong>
          <p>In no event shall ANT General Trading and Industries Holding be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of or inability to use our website, even if we have been advised of the possibility of such damages.</p>
        </li>
        <li className="mb-4">
          <strong>Changes to the Terms</strong>
          <p>We reserve the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting on the website. It is your responsibility to review the Terms of Use periodically to stay informed of any updates.</p>
        </li>
        <li className="mb-4">
          <strong>Governing Law</strong>
          <p>These Terms of Use are governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia, without regard to its conflict of law provisions.</p>
        </li>
        <li className="mb-4">
          <strong>Contact Us</strong>
          <p>If you have any questions or concerns regarding these Terms of Use, please contact us at <a href="mailto:info@ANT-holding.com.et" className="text-[#0E74A4]">info@ANT-holding.com.et</a>.</p>
        </li>
      </ol>
    </div>
  );
}

export default TermsOfUse;
