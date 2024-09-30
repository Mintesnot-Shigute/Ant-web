import React from 'react';

function AgricultureProduct() {
  return (
    <div id="products" className="container mx-auto py-12">
      {/* Agriculture & Food Processing Products Section */}
      <div className="mb-12">
        <h2 className="text-5xl font-bold text-center mb-8 text-[#1B3855]">
          Agriculture & Food Processing
        </h2>
        <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">Our Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
{/* Agriculture Products */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
  <img src="/Agriculture.jpg" alt="Agriculture Products" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-lg sm:text-xl font-bold text-[#0E74A4] mb-3">AGRICULTURE</h3>
    <div className="space-y-1"> {/* Space between items */}
      {[
        'Seeds (hybrid, organic, and conventional)',
        'Pesticides and herbicides',
        'Agricultural machinery and equipment',
        'Irrigation systems and supplies',
        'Soil health products',
        'Greenhouse materials and equipment',
        'Crop protection products',
        'Animal feed and supplements',
      ].map((item, index) => (
        <div key={index} className="mb-1"> {/* Align items horizontally */}
          <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span> {/* Circle dot indicator */}
          <span className="text-sm sm:text-base text-gray-700 inline align-middle">{item}</span> {/* Item text */}
        </div>
      ))}
    </div>
  </div>
</div>

{/* Poultry Products */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
  <img src="/Poultry.jpg" alt="Poultry Products" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-lg sm:text-xl font-bold text-[#0E74A4] mb-3">POULTRY</h3>
    <div className="space-y-1"> {/* Space between items */}
      {[
        'Day-old chicks',
        'Poultry feed',
        'Poultry vitamins and supplements',
        'Incubators and hatchery equipment',
        'Brooding equipment',
        'Poultry housing systems',
        'Egg packaging materials',
        'Processed poultry products',
        'Poultry health products',
      ].map((item, index) => (
        <div key={index} className="mb-1"> {/* Align items horizontally */}
          <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span> {/* Circle dot indicator */}
          <span className="text-sm sm:text-base text-gray-700 inline align-middle">{item}</span> {/* Item text */}
        </div>
      ))}
    </div>
  </div>
</div>

{/* Food Processing Products */}
<div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
  <img src="/FoodProcessing.jpg" alt="Food Processing Products" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-lg sm:text-xl font-bold text-[#0E74A4] mb-3">FOOD PROCESSING</h3>
    <div className="space-y-1"> {/* Space between items */}
      {[
        'Processed grains',
        'Dairy products',
        'Processed fruits and vegetables',
        'Meat products',
        'Snack foods',
        'Beverages',
        'Bakery products',
        'Ready-to-eat meals',
        'Food packaging materials',
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
      </div>
    </div>
  );
}

export default AgricultureProduct;
