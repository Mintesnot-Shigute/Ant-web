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
<div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 transition-transform hover:scale-105">
  <h4 className="text-xl sm:text-2xl font-bold text-[#0E74A4] mb-3">FOOD PROCESSING</h4>
  <div className="space-y-1"> {/* Space between items */}
    {[
      'Food product development',
      'Quality control services',
      'Food safety training',
    ].map((item, index) => (
      <div key={index} className="mb-1"> {/* Align items horizontally */}
        <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span> {/* Circle dot indicator */}
        <span className="text-sm sm:text-base text-gray-700 inline align-middle">{item}</span> {/* Item text */}
      </div>
    ))}
  </div>
</div>

{/* Service Column 2 */}
<div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 transition-transform hover:scale-105">
  <h4 className="text-xl sm:text-2xl font-bold text-[#0E74A4] mb-3">CUSTOM SERVICES</h4>
  <div className="space-y-1"> {/* Space between items */}
    {[
      'Packaging design services',
      'Custom processing services',
      'Logistics management',
    ].map((item, index) => (
      <div key={index} className="mb-1"> {/* Align items horizontally */}
        <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span> {/* Circle dot indicator */}
        <span className="text-sm sm:text-base text-gray-700 inline align-middle">{item}</span> {/* Item text */}
      </div>
    ))}
  </div>
</div>

{/* Service Column 3 */}
<div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 transition-transform hover:scale-105">
  <h4 className="text-xl sm:text-2xl font-bold text-[#0E74A4] mb-3">REGULATORY SUPPORT</h4>
  <div className="space-y-1"> {/* Space between items */}
    {[
      'Compliance assistance',
      'Market research support',
      'Regulatory consulting services',
    ].map((item, index) => (
      <div key={index} className="mb-1"> {/* Align items horizontally */}
        <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span> {/* Circle dot indicator */}
        <span className="text-sm sm:text-base text-gray-700 inline align-middle">{item}</span> {/* Item text */}
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}

export default AgricultureService;
