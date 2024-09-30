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
                   {/* Specialty Coffee Section */}
                   <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 mx-auto">
  <img src="/AntCoffe.jpg" alt="Specialty Coffee" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-xl font-bold text-[#0E74A4] mb-4">SPECIALTY COFFEE</h3>
    <div className="space-y-1"> {/* Space between items */}
      {[
        'Single-origin coffee beans',
        'Organic coffee beans',
        'Fair trade certified coffee',
        'Green coffee beans',
        'Roasted coffee beans',
        'Coffee blends',
        'Decaffeinated coffee',
        'Specialty coffee pods and capsules',
      ].map((item, index) => (
        <div key={index} className="mb-1"> {/* Align items horizontally */}
          <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span> {/* Circle dot indicator */}
          <span className="text-lg text-gray-700 inline align-middle">{item}</span> {/* Item text */}
        </div>
      ))}
    </div>
  </div>
</div>


          {/* Oil Seeds Section */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 mx-auto">
  <img src="/AntOilseed.jpg" alt="Oil Seeds" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-xl font-bold text-[#0E74A4] mb-4">OIL SEEDS</h3>
    <div className="space-y-1"> {/* Space between items */}
      {[
        'Sesame seeds (white and black)',
        'Sunflower seeds',
        'Cotton seeds',
      ].map((item, index) => (
        <div key={index} className="mb-1"> {/* Align items horizontally */}
          <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span> {/* Circle dot indicator */}
          <span className="text-lg text-gray-700 inline align-middle">{item}</span> {/* Item text */}
        </div>
      ))}
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default ExportTradeProduct;
