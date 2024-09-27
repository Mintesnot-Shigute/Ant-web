import React from 'react';

function ExportTradeProduct() {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full px-4">
        {/* Heading for Export Trade Products Section */}
        <h2 className="text-5xl font-bold text-center mb-8 mt-8 text-[#1B3855]">
          Export Trade
        </h2>
        
        {/* Subheading for Products */}
        <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">
          Our Products
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Specialty Coffee Section */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 mx-auto">
            <img src="/AntCoffe.jpg" alt="Specialty Coffee" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#0E74A4] mb-4">SPECIALTY COFFEE</h3>
              <ul className="list-none pl-5 list-inside text-gray-700 space-y-1">
                <li className="mb-1" style={{ listStyleType: 'square' }}>Single-origin coffee beans</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Organic coffee beans</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Fair trade certified coffee</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Green coffee beans</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Roasted coffee beans</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Coffee blends</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Decaffeinated coffee</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Specialty coffee pods and capsules</li>
              </ul>
            </div>
          </div>

          {/* Oil Seeds Section */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 mx-auto">
            <img src="/AntOilseed.jpg" alt="Oil Seeds" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#0E74A4] mb-4">OIL SEEDS</h3>
              <ul className="list-none pl-5 list-inside text-gray-700 space-y-1">
                <li className="mb-1" style={{ listStyleType: 'square' }}>Sesame seeds (white and black)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Sunflower seeds</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Cotton seeds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportTradeProduct;
