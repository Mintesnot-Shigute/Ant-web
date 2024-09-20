import React from 'react';

function PharmaHealthcareProducts() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold text-center mb-12">Pharmaceuticals & Healthcare Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Essential Pharmaceuticals Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <img 
            src="/image4.jpg" 
            alt="Essential Pharmaceuticals" 
            className="w-full h-auto object-contain rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">Essential Pharmaceuticals</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Antibiotics, antifungals, antiparasitic, and antivirals</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Pain relievers</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Vaccines</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Cardiovascular medications</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Antidiabetic medications</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Antihypertensives</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Gastrointestinal drugs</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Respiratory medications</span>
            </li>
          </ul>
        </div>

        {/* Specialty Pharmaceuticals Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <img 
            src="/image3.jpg" 
            alt="Specialty Pharmaceuticals" 
            className="w-full h-auto object-contain rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">Specialty Pharmaceuticals</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Oncology drugs</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Biologics and biosimilars</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Immunotherapy agents</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Rare disease treatments</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Personalized medicine formulations</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Hormonal therapies</span>
            </li>
          </ul>
        </div>

        {/* Diagnostics Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <img 
            src="/image2.jpg" 
            alt="Diagnostics" 
            className="w-full h-auto object-contain rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">Diagnostics</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Rapid diagnostic test kits (e.g., HIV, HBV, HCV, COVID-19, malaria)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Blood glucose meters</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Cholesterol test kits</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Pregnancy test kits</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Infectious disease testing kits</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Laboratory reagents and supplies</span>
            </li>
          </ul>
        </div>

        {/* Medical Equipment Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <img 
            src="/image1.jpg" 
            alt="Medical Equipment" 
            className="w-full h-auto object-contain rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold mb-4">Medical Equipment</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Diagnostic imaging equipment (e.g., X-ray, MRI, CT scanners)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Ultrasound machines</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Patient monitoring systems</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Surgical instruments</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Ventilators and respiratory support systems</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Infusion pumps</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Hospital beds and furniture</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
              <span>Personal protective equipment (PPE)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PharmaHealthcareProducts;
