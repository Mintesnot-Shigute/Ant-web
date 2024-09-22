import React, { useEffect } from 'react';

function Agriculture() {
  // Scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-5xl font-bold text-center text-blue-900 mb-8">
        Agriculture & Food Processing Products
      </h2>
      <p className="text-gray-600 text-center mb-10 text-lg max-w-2xl mx-auto">
        Discover our wide range of high-quality products in Agriculture & Food Processing, designed to meet the needs of farmers and consumers alike.
      </p>

      <div id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {/* Agriculture Products */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
          <img src="/Agriculture.jpg" alt="Agriculture Products" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-blue-700 mb-4">AGRICULTURE</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Seeds (hybrid, organic, and conventional)</li>
              <li>Pesticides and herbicides</li>
              <li>Agricultural machinery and equipment (tractors, plows, harvesters)</li>
              <li>Irrigation systems and supplies (drip irrigation, sprinklers)</li>
              <li>Soil health products (compost, soil conditioners)</li>
              <li>Greenhouse materials and equipment</li>
              <li>Crop protection products (netting, mulching films)</li>
              <li>Animal feed and supplements</li>
            </ul>
          </div>
        </div>

        {/* Poultry Products */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
          <img src="/Poultry.jpg" alt="Poultry Products" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-blue-700 mb-4">POULTRY</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Day-old chicks (broilers, layers)</li>
              <li>Poultry feed (starter, grower, finisher)</li>
              <li>Poultry vitamins and supplements</li>
              <li>Incubators and hatchery equipment</li>
              <li>Brooding equipment (heaters, brooders)</li>
              <li>Poultry housing systems (cages, coops)</li>
              <li>Egg packaging materials</li>
              <li>Processed poultry products (frozen chicken, chicken parts)</li>
              <li>Poultry health products (vaccines, medications)</li>
            </ul>
          </div>
        </div>

        {/* Food Processing Products */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 max-w-sm mx-auto">
          <img src="/FoodProcessing.jpg" alt="Food Processing Products" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-blue-700 mb-4">FOOD PROCESSING</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Processed grains (flour, rice, maize meal)</li>
              <li>Dairy products (milk, cheese, yogurt, butter)</li>
              <li>Processed fruits and vegetables (canned, dried, frozen)</li>
              <li>Meat products (sausages, canned meat, deli meats)</li>
              <li>Snack foods (chips, nuts, dried fruits)</li>
              <li>Beverages (juices, soft drinks, bottled water)</li>
              <li>Bakery products (bread, pastries, cakes)</li>
              <li>Ready-to-eat meals and convenience foods</li>
              <li>Food packaging materials and supplies</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-4xl font-semibold text-blue-800 text-center mb-6" id="services">Services</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Service Column 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-2xl font-bold text-blue-600 mb-4">FOOD PROCESSING SERVICES</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Food product development and formulation</li>
            <li>Quality control and assurance services</li>
            <li>Food safety and hygiene training</li>
          </ul>
        </div>

        {/* Service Column 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-2xl font-bold text-blue-600 mb-4">CUSTOM SERVICES</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Packaging design and labeling services</li>
            <li>Custom processing and co-packing services</li>
            <li>Supply chain and logistics management</li>
          </ul>
        </div>

        {/* Service Column 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-2xl font-bold text-blue-600 mb-4">REGULATORY SUPPORT</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Regulatory compliance and certification assistance</li>
            <li>Market research and consumer insights</li>
            <li>Export and international trade support for processed foods</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Agriculture;
