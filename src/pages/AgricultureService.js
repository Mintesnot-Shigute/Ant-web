import React from 'react';

function AgricultureService() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-5xl font-bold text-center mb-8 text-[#1B3855]" id="services">
        Agriculture & Food Processing
      </h2>
      {/* Agriculture & Food Processing Services Section */}
      <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">Our Services</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Service Column 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
          <h4 className="text-2xl font-bold text-[#0E74A4] mb-4">FOOD PROCESSING</h4>
          <ul className="list-none list-inside text-gray-700 space-y-1">
            <li className="mb-1" style={{ listStyleType: 'square' }}>Food product development and formulation</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Quality control and assurance services</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Food safety and hygiene training</li>
          </ul>
        </div>

        {/* Service Column 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
          <h4 className="text-2xl font-bold text-[#0E74A4] mb-4">CUSTOM SERVICES</h4>
          <ul className="list-none list-inside text-gray-700 space-y-1">
            <li className="mb-1" style={{ listStyleType: 'square' }}>Packaging design and labeling services</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Custom processing and co-packing services</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Supply chain and logistics management</li>
          </ul>
        </div>

        {/* Service Column 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
          <h4 className="text-2xl font-bold text-[#0E74A4] mb-4">REGULATORY SUPPORT</h4>
          <ul className="list-none list-inside text-gray-700 space-y-1">
            <li className="mb-1" style={{ listStyleType: 'square' }}>Compliance consulting for food safety regulations</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Assistance with product certifications and approvals</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Guidance on labeling and advertising regulations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AgricultureService;
