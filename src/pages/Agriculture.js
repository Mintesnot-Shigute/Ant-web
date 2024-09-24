import React from 'react';

function Agriculture() {
  // Scroll to top when the component loads


  return (
    <div id="products" className="container mx-auto py-12">
      {/* Agriculture & Food Processing Products Section */}
      <div  className="mb-12">
        <h2 className="text-5xl font-bold text-center  mb-8 text-[#1B3855]">
          Agriculture & Food Processing Products
        </h2>
        <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">Our Products</h3>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Agriculture Products */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
            <img src="/Agriculture.jpg" alt="Agriculture Products" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#0E74A4] mb-4">AGRICULTURE</h3>
              <ul className="list-none list-inside text-gray-700 space-y-1">
                <li className="mb-1" style={{ listStyleType: 'square' }}>Seeds (hybrid, organic, and conventional)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Pesticides and herbicides</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Agricultural machinery and equipment (tractors, plows, harvesters)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Irrigation systems and supplies (drip irrigation, sprinklers)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Soil health products (compost, soil conditioners)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Greenhouse materials and equipment</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Crop protection products (netting, mulching films)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Animal feed and supplements</li>
              </ul>
            </div>
          </div>

          {/* Poultry Products */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
            <img src="/Poultry.jpg" alt="Poultry Products" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#0E74A4] mb-4">POULTRY</h3>
              <ul className="list-none list-inside text-gray-700 space-y-1">
                <li className="mb-1" style={{ listStyleType: 'square' }}>Day-old chicks (broilers, layers)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Poultry feed (starter, grower, finisher)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Poultry vitamins and supplements</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Incubators and hatchery equipment</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Brooding equipment (heaters, brooders)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Poultry housing systems (cages, coops)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Egg packaging materials</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Processed poultry products (frozen chicken, chicken parts)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Poultry health products (vaccines, medications)</li>
              </ul>
            </div>
          </div>

          {/* Food Processing Products */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
            <img src="/FoodProcessing.jpg" alt="Food Processing Products" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#0E74A4] mb-4">FOOD PROCESSING</h3>
              <ul className="list-none list-inside text-gray-700 space-y-1">
                <li className="mb-1" style={{ listStyleType: 'square' }}>Processed grains (flour, rice, maize meal)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Dairy products (milk, cheese, yogurt, butter)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Processed fruits and vegetables (canned, dried, frozen)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Meat products (sausages, canned meat, deli meats)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Snack foods (chips, nuts, dried fruits)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Beverages (juices, soft drinks, bottled water)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Bakery products (bread, pastries, cakes)</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Ready-to-eat meals and convenience foods</li>
                <li className="mb-1" style={{ listStyleType: 'square' }}>Food packaging materials and supplies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-5xl font-bold text-center  mb-8 text-[#1B3855]" id="services">
          Agriculture & Food Processing Services
        </h2>
      {/* Agriculture & Food Processing Services Section */}
      <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300" >Our Services</h3>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Service Column 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
          <h4 className="text-2xl font-bold text-[#0E74A4] mb-4">FOOD PROCESSING SERVICES</h4>
          <ul className="list-none list-inside text-gray-700 space-y-1">
            <li className="mb-1" style={{ listStyleType: 'square' }}>Food product development and formulation</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Quality control and assurance services</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Food safety and hygiene training</li>
          </ul>
        </div>

        {/* Service Column 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
          <h4 className="text-2xl font-bold text-[#0E74A4] mb-4">CUSTOM SERVICES</h4>
          <ul className="list-none list-inside text-gray-700 space-y-1">
            <li className="mb-1" style={{ listStyleType: 'square' }}>Packaging design and labeling services</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Custom processing and co-packing services</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Supply chain and logistics management</li>
          </ul>
        </div>

        {/* Service Column 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
          <h4 className="text-2xl font-bold text-[#0E74A4] mb-4">REGULATORY SUPPORT</h4>
          <ul className="list-none list-inside text-gray-700 space-y-1">
            <li className="mb-1" style={{ listStyleType: 'square' }}>Regulatory compliance and certification assistance</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Market research and consumer insights</li>
            <li className="mb-1" style={{ listStyleType: 'square' }}>Export and international trade support for processed foods</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Agriculture;
