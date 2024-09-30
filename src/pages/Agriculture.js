import React from 'react';

function Agriculture() {
  // Scroll to top when the component loads


  return (
    <div id="products" className="container mx-auto py-6 sm:py-12">
      {/* Agriculture & Food Processing Products Section */}
      <div className="mb-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-[#1B3855]">
          Agriculture & Food Processing
        </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">Our Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Agriculture Products */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
            <img src="/Agriculture.jpg" alt="Agriculture Products" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#0E74A4] mb-3">AGRICULTURE</h3>
              <ul className="list-none list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                <li className="mb-1" style={{ listStyleType: 'square' }}>Seeds (hybrid, organic, and conventional)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Pesticides and herbicides</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Agricultural machinery and equipment</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Irrigation systems and supplies</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Soil health products</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Greenhouse materials and equipment</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Crop protection products</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Animal feed and supplements</li>
              </ul>
            </div>
          </div>

          {/* Poultry Products */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
            <img src="/Poultry.jpg" alt="Poultry Products" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#0E74A4] mb-3">POULTRY</h3>
              <ul className="list-none list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                <li className="mb-1" style={{ listStyleType: 'square' }}>Day-old chicks</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Poultry feed</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Poultry vitamins and supplements</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Incubators and hatchery equipment</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Brooding equipment</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Poultry housing systems</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Egg packaging materials</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Processed poultry products</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Poultry health products</li>
              </ul>
            </div>
          </div>

          {/* Food Processing Products */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
            <img src="/FoodProcessing.jpg" alt="Food Processing Products" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#0E74A4] mb-3">FOOD PROCESSING</h3>
              <ul className="list-none list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                <li className="mb-1" style={{ listStyleType: 'square' }}>Processed grains</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Dairy products</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Processed fruits and vegetables</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Meat products</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Snack foods</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Beverages</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Bakery products</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Ready-to-eat meals</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Food packaging materials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-[#1B3855]" id="services">
        Agriculture & Food Processing
      </h2>
      <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">Our Services</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Service Column 1 */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 transition-transform hover:scale-105">
          <h4 className="text-xl sm:text-2xl font-bold text-[#0E74A4] mb-3">FOOD PROCESSING</h4>
          <ul className="list-none list-inside text-gray-700 space-y-1 text-sm sm:text-base">
            <li className="mb-1" style={{ listStyleType: 'square' }}>Food product development</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Quality control services</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Food safety training</li>
          </ul>
        </div>

        {/* Service Column 2 */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 transition-transform hover:scale-105">
          <h4 className="text-xl sm:text-2xl font-bold text-[#0E74A4] mb-3">CUSTOM SERVICES</h4>
          <ul className="list-none list-inside text-gray-700 space-y-1 text-sm sm:text-base">
            <li className="mb-1" style={{ listStyleType: 'square' }}>Packaging design services</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Custom processing services</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Logistics management</li>
          </ul>
        </div>

        {/* Service Column 3 */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 transition-transform hover:scale-105">
          <h4 className="text-xl sm:text-2xl font-bold text-[#0E74A4] mb-3">REGULATORY SUPPORT</h4>
          <ul className="list-none list-inside text-gray-700 space-y-1 text-sm sm:text-base">
            <li className="mb-1" style={{ listStyleType: 'square' }}>Compliance assistance</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Market research support</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Regulatory consulting services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Agriculture;
