import React from 'react';

function ExportTrade() {



  
  return (
    <div id="products" className="container mx-auto py-12">
      <h2 className="text-5xl font-bold text-center text-[#1B3855] mb-8">Export Trade Products</h2>
      <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">Our Products</h3>


      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
          {/* Specialty Coffee Section */}
          <div  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 mx-auto">
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

      <h3 className="text-4xl font-semibold text-[#0E74A4] text-center mt-16 mb-16 hover:text-gray-600 transition-colors duration-300" id="services">Our Services</h3>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
          {/* Service Column 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src="/Sourcing.jpg" alt="Sourcing and Procurement" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-2xl font-bold text-[#0E74A4] mb-4">SOURCING AND PROCUREMENT</h4>
              <ul className="list-none list-inside text-gray-700 space-y-1">
                <li className="mb-1" style={{ listStyleType: 'square' }}>Identification and procurement of high-quality specialty coffee, oil seeds, and pulses from local farmers and cooperatives</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Establishing partnerships with reliable and sustainable producers</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Ensuring compliance with international quality standards and certifications</li>
              </ul>
            </div>
          </div>

          {/* Service Column 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src="/Processing.jpg" alt="Processing and Packaging" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-2xl font-bold text-[#0E74A4] mb-4">PROCESSING AND PACKAGING</h4>
              <ul className="list-none list-inside text-gray-700 space-y-1">
                <li className="mb-1" style={{ listStyleType: 'square' }}>Cleaning, sorting, and grading of coffee beans, oil seeds, and pulses</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Custom processing services, including roasting (for coffee) and shelling (for seeds)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Packaging solutions tailored to client requirements (e.g., bulk packaging, retail packaging)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportTrade;
