import React, { useEffect } from 'react';

function ExportTrade() {



  
  return (
    <div id="products" className="container mx-auto py-12">
      <h2 className="text-5xl font-bold text-center text-blue-900 mb-8">Export Trade Products</h2>
      <p className="text-gray-600 text-center mb-10 text-lg max-w-2xl mx-auto">
        Explore our range of high-quality products under Export Trade, sourced directly from trusted suppliers.
      </p>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
          {/* Specialty Coffee Section */}
          <div  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 mx-auto">
            <img src="/AntCoffe.jpg" alt="Specialty Coffee" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-700 mb-4">SPECIALTY COFFEE</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Single-origin coffee beans</li>
                <li>Organic coffee beans</li>
                <li>Fair trade certified coffee</li>
                <li>Green coffee beans</li>
                <li>Roasted coffee beans</li>
                <li>Coffee blends</li>
                <li>Decaffeinated coffee</li>
                <li>Specialty coffee pods and capsules</li>
              </ul>
            </div>
          </div>

          {/* Oil Seeds Section */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 mx-auto">
            <img src="/AntOilseed.jpg" alt="Oil Seeds" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-700 mb-4">OIL SEEDS</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Sesame seeds (white and black)</li>
                <li>Sunflower seeds</li>
                <li>Cotton seeds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-4xl font-semibold text-blue-800 text-center mt-16 mb-16" id="services">Services</h3>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
          {/* Service Column 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src="/Sourcing.jpg" alt="Sourcing and Procurement" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-2xl font-bold text-blue-600 mb-4">SOURCING AND PROCUREMENT</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Identification and procurement of high-quality specialty coffee, oil seeds, and pulses from local farmers and cooperatives</li>
                <li>Establishing partnerships with reliable and sustainable producers</li>
                <li>Ensuring compliance with international quality standards and certifications</li>
              </ul>
            </div>
          </div>

          {/* Service Column 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src="/Processing.jpg" alt="Processing and Packaging" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-2xl font-bold text-blue-600 mb-4">PROCESSING AND PACKAGING</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Cleaning, sorting, and grading of coffee beans, oil seeds, and pulses</li>
                <li>Custom processing services, including roasting (for coffee) and shelling (for seeds)</li>
                <li>Packaging solutions tailored to client requirements (e.g., bulk packaging, retail packaging)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportTrade;
