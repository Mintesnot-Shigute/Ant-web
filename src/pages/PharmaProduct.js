import React from 'react';

function PharmaProduct() {
  return (
    <div id="products" className="container mx-auto py-12 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1B3855]">Pharmaceuticals & Healthcare</h2>

     {/* Products Section */}
     <div className="mb-12">
        <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">
          Our Products
        </h3>

        <div className="flex flex-col md:flex-row justify-center mb-8 space-y-6 md:space-y-0 md:space-x-6">
  <img 
    src="/medicinefabric.jpg" 
    alt="Pharmaceuticals Products" 
    className="w-full md:w-1/2 lg:w-1/3 h-64 object-cover rounded-md"
    loading="lazy"
  />
  <img 
    src="/AdobeStock_110350441.jpg" 
    alt="Pharmaceuticals Products" 
    className="w-full md:w-1/2 lg:w-1/3 h-64 object-cover rounded-md"
    loading="lazy"
  />
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Essential Pharmaceuticals Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 lg:ml-48">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Essential Pharmaceuticals</h4>
            <div className="space-y-1">
              {[
                'Antibiotics',
                'Pain relievers',
                'Vaccines',
                'Cardiovascular medications',
                'Diabetes medications',
              ].map((item, index) => (
                <div key={index} className="mb-1">
                  <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span>
                  <span className="text-lg text-gray-700 inline align-middle">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialty Pharmaceuticals Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Specialty Pharmaceuticals</h4>
            <div className="space-y-1">
              {[
                'Oncology drugs',
                'Biologics',
                'Personalized medicine formulations',
                'Rare disease treatments',
              ].map((item, index) => (
                <div key={index} className="mb-1">
                  <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span>
                  <span className="text-lg text-gray-700 inline align-middle">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostics Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 lg:ml-48">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Diagnostics</h4>
            <div className="space-y-1">
              {[
                'Test kits for various diseases',
                'Laboratory supplies',
                'Health monitoring devices',
              ].map((item, index) => (
                <div key={index} className="mb-1">
                  <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span>
                  <span className="text-lg text-gray-700 inline align-middle">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Medical Equipment Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Medical Equipment</h4>
            <div className="space-y-1">
              {[
                'Surgical instruments',
                'Patient monitoring systems',
                'Personal protective equipment (PPE)',
              ].map((item, index) => (
                <div key={index} className="mb-1">
                  <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span>
                  <span className="text-lg text-gray-700 inline align-middle">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmaProduct;
