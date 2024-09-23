import React from 'react';

function PharmaHealthcare() {



  return (
    <div id="products"className="container mx-auto py-12">
      <h2 className="text-5xl font-bold text-center mb-12 text-[#1B3855]">Pharmaceuticals & Healthcare Products</h2>

      {/* Products Section */}
      <div className="mb-12">
      <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">Our Products</h3>

        <div className="flex justify-center mb-8">
          <img 
            src="/medicinefabric.jpg" 
            alt="Pharmaceuticals Products" 
            className="w-1/3 h-64 object-cover rounded-md mr-24"
          />
          <img 
            src="/AdobeStock_110350441.jpg" 
            alt="Pharmaceuticals Products" 
            className="w-1/3 h-64 object-cover rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Essential Pharmaceuticals Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 ml-48">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Essential Pharmaceuticals</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 pl-6">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Antibiotics</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Pain relievers</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Vaccines</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Cardiovascular medications</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Diabetes medications</span>
              </li>
            </ul>
          </div>

          {/* Specialty Pharmaceuticals Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Specialty Pharmaceuticals</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 pl-6">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Oncology drugs</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Biologics</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Personalized medicine formulations</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Rare disease treatments</span>
              </li>
            </ul>
          </div>

          {/* Diagnostics Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 ml-48">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Diagnostics</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 pl-6">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Test kits for various diseases</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Laboratory supplies</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Health monitoring devices</span>
              </li>
            </ul>
          </div>

          {/* Medical Equipment Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Medical Equipment</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 pl-6">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Surgical instruments</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Patient monitoring systems</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Personal protective equipment (PPE)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="mb-12">
        <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">Our Services</h3>
        <div className="flex justify-center mb-8">
          <img 
            src="/pharma.jpg" 
            alt="Pharmaceutical Services" 
            className="w-1/3 h-64 object-cover rounded-md mr-24"
          />
          <img 
            src="/national-cancer-institute-aelk4Tn0vlI-unsplash.jpg" 
            alt="Pharmaceutical Services" 
            className="w-1/3 h-64 object-cover rounded-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Import and Distribution Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 ml-48">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Import and Distribution</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 pl-6">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Sourcing of high-quality pharmaceuticals</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Efficient logistics management</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Regulatory compliance handling</span>
              </li>
            </ul>
          </div>

          {/* Manufacturing Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Manufacturing</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 pl-6">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Production of generic pharmaceuticals</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Quality assurance protocols</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Research and development</span>
              </li>
            </ul>
          </div>

          {/* Diagnostic Services Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 ml-48">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Diagnostic Services</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 pl-6">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Comprehensive diagnostic testing</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Consultation with healthcare professionals</span>
              </li>
            </ul>
          </div>

          {/* Training Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Training</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 pl-6">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Workshops for healthcare professionals</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Training on equipment usage and safety</span>
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-[#0E74A4] rounded-full mr-2"></span>
                <span>Continuing education programs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmaHealthcare;
