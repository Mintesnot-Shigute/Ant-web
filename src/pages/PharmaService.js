import React from 'react';

function PharmaService() {
  return (
    <div id="products" className="container mx-auto py-12 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1B3855]">Pharmaceuticals & Healthcare</h2>

          {/* Services Section */}
          <div id="services" className="mb-12">
        <h3 className="text-3xl font-semibold text-center mb-14 text-[#0E74A4] hover:text-gray-600 transition-colors duration-300">
          Our Services
        </h3>

        <div className="flex flex-col md:flex-row justify-center mb-8 space-y-6 md:space-y-0 md:space-x-6">
          <img 
            src="/pharma.jpg" 
            alt="Pharmaceutical Services" 
            className="w-full md:w-1/2 lg:w-1/3 h-64 object-cover rounded-md"
            loading="lazy"
          />
          <img 
            src="/national-cancer-institute-aelk4Tn0vlI-unsplash.jpg" 
            alt="Pharmaceutical Services" 
            className="w-full md:w-1/2 lg:w-1/3 h-64 object-cover rounded-md"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Import and Distribution Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 lg:ml-48">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Import and Distribution</h4>
            <div className="space-y-1">
              {[
                'Sourcing of high-quality pharmaceuticals',
                'Efficient logistics management',
                'Regulatory compliance handling',
              ].map((item, index) => (
                <div key={index} className="mb-1">
                  <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span>
                  <span className="text-lg text-gray-700 inline align-middle">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Manufacturing Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Manufacturing</h4>
            <div className="space-y-1">
              {[
                'Production of essential drugs',
                'Quality assurance protocols',
                'Research and development initiatives',
              ].map((item, index) => (
                <div key={index} className="mb-1">
                  <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span>
                  <span className="text-lg text-gray-700 inline align-middle">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic Services Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 lg:ml-48">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Diagnostic Services</h4>
            <div className="space-y-1">
              {[
                'Comprehensive lab testing',
                'Expert consultations',
                'Health monitoring services',
              ].map((item, index) => (
                <div key={index} className="mb-1">
                  <span className="w-3 h-3 bg-[#1B3855] rounded-full inline-block align-middle mr-2"></span>
                  <span className="text-lg text-gray-700 inline align-middle">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Section */}
          <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105">
            <h4 className="text-2xl font-semibold mb-4 text-[#0E74A4]">Consultation</h4>
            <div className="space-y-1">
              {[
                'Professional guidance on medications',
                'Health risk assessments',
                'Personalized health strategies',
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

export default PharmaService;
