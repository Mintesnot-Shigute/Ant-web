import React from 'react';

function PharmaProduct() {
  return (
    <div id="products" className="container mx-auto py-12">
      <h2 className="text-5xl font-bold text-center mb-12 text-[#1B3855]">Pharmaceuticals & Healthcare</h2>

      {/* Products Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">Our Products</h3>

        <div className="flex justify-center mb-8">
          <img 
            src="/medicinefabric.jpg" 
            alt="Pharmaceuticals Products" 
            className="w-1/3 h-64 object-cover rounded-md mr-24"
            loading="lazy"
          />
          <img 
            src="/AdobeStock_110350441.jpg" 
            alt="Pharmaceuticals Products" 
            className="w-1/3 h-64 object-cover rounded-md"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Essential Pharmaceuticals Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 ml-36">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Essential Pharmaceuticals</h4>
            <ul className="list-none pl-5 list-inside text-gray-700 space-y-1">
              <li className="mb-1" style={{ listStyleType: 'square' }}>Antibiotics</li>
              <li className="mb-1" style={{ listStyleType: 'square' }}>Pain relievers</li>
              <li className="mb-1" style={{ listStyleType: 'square' }}>Vaccines</li>
              <li className="mb-1" style={{ listStyleType: 'square' }}>Cardiovascular medications</li>
              <li className="mb-1" style={{ listStyleType: 'square' }}>Diabetes medications</li>
            </ul>
          </div>

          {/* Specialty Pharmaceuticals Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Specialty Pharmaceuticals</h4>
            <ul className="list-none pl-5 list-inside text-gray-700 space-y-1">
              <li className="mb-1" style={{ listStyleType: 'square' }}>Oncology drugs</li>
              <li className="mb-1" style={{ listStyleType: 'square' }}>Biologics</li>
              <li className="mb-1" style={{ listStyleType: 'square' }}>Personalized medicine formulations</li>
              <li className="mb-1" style={{ listStyleType: 'square' }}>Rare disease treatments</li>
            </ul>
          </div>

          {/* Diagnostics Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 ml-36">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Diagnostics</h4>
            <ul className="list-none pl-5 list-inside text-gray-700 space-y-1">
              <li className="mb-1" style={{ listStyleType: 'square' }}>Test kits for various diseases</li>
              <li className="mb-1" style={{ listStyleType: 'square' }}>Laboratory supplies</li>
              <li className="mb-1" style={{ listStyleType: 'square' }}>Health monitoring devices</li>
            </ul>
          </div>

          {/* Medical Equipment Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Medical Equipment</h4>
            <ul className="list-none pl-5 list-inside text-gray-700 space-y-1">
              <li className="mb-1" style={{ listStyleType: 'square' }}>Surgical instruments</li>
              <li className="mb-1" style={{ listStyleType: 'square' }}>Patient monitoring systems</li>
              <li className="mb-1" style={{ listStyleType: 'square' }}>Personal protective equipment (PPE)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmaProduct;
