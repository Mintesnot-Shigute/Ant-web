import React from 'react';

function ExportTradeService() {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full px-4">
        {/* Heading for Export Trade Section */}
        <h2 className="text-5xl font-bold text-center mt-6 mb-8 text-[#1B3855]">
          Export Trade
        </h2>
        
        {/* Subheading for Products */}
        <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">
          Our Services
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-8">
          {/* Service Column 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src="/Sourcing.jpg" alt="Sourcing and Procurement" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-2xl font-bold text-[#0E74A4] mb-4">SOURCING AND PROCUREMENT</h4>
              <ul className="list-none list-inside text-gray-700 space-y-1">
                <li className="mb-1" style={{ listStyleType: 'square' }}>
                  Identification and procurement of high-quality specialty coffee, oil seeds, and pulses from local farmers and cooperatives
                </li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>
                  Establishing partnerships with reliable and sustainable producers
                </li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>
                  Ensuring compliance with international quality standards and certifications
                </li>
              </ul>
            </div>
          </div>

          {/* Service Column 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src="/Processing.jpg" alt="Processing and Packaging" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-2xl font-bold text-[#0E74A4] mb-4">PROCESSING AND PACKAGING</h4>
              <ul className="list-none list-inside text-gray-700 space-y-1">
                <li className="mb-1" style={{ listStyleType: 'square' }}>
                  Cleaning, sorting, and grading of coffee beans, oil seeds, and pulses
                </li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>
                  Custom processing services, including roasting (for coffee) and shelling (for seeds)
                </li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>
                  Packaging solutions tailored to client requirements (e.g., bulk packaging, retail packaging)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportTradeService;
