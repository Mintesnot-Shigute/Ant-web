import React from 'react';

const WhyWorkWithUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 bg-gray-200 p-4 rounded-lg">Why Work With Us?</h1>
        <p className="text-xl text-gray-600 mt-4">
          ANT General Trading and Industries Holding is deeply committed to transforming lives 
          and inspiring futures through innovative, holistic solutions in pharmaceuticals and healthcare, 
          export trade, agriculture, and food processing.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Existing Sections */}
        <div className="bg-gray-100 p-6 rounded-lg mb-8 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#1B3855] mb-4">Quality Control</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Rigorous quality testing and certification processes</li>
            <li>Implementation of quality assurance protocols to ensure product consistency and safety</li>
            <li>Traceability systems to track products from farm to export</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#1B3855] mb-4">Logistics and Export</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Efficient supply chain management and logistics coordination</li>
            <li>Handling of export documentation and regulatory compliance</li>
            <li>Coordination with shipping and freight companies for timely delivery</li>
            <li>Warehousing and inventory management</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#1B3855] mb-4">Market Research and Development</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Market analysis and identification of potential export markets</li>
            <li>Development of marketing strategies to promote products internationally</li>
            <li>Participation in trade shows and international exhibitions</li>
            <li>Building and maintaining relationships with international buyers</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#1B3855] mb-4">Consultation and Advisory</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Advisory services for farmers and cooperatives on best agricultural practices</li>
            <li>Training programs for improving product quality and yield</li>
            <li>Guidance on international trade regulations and export procedures</li>
            <li>Support in obtaining necessary certifications (e.g., organic, fair trade)</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-[#1B3855] mb-4">Sustainability and Social Responsibility</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Implementation of sustainable farming practices</li>
            <li>Support for community development projects</li>
            <li>Ensuring fair trade and ethical sourcing practices</li>
            <li>Promoting environmental conservation and biodiversity</li>
          </ul>
        </div>
      </div>
      {/* Striped Background */}
      <div className="w-full h-1 bg-gray-300 mt-4 mb-6"></div>
      {/* Achievements and Milestones & Plans Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {/* Achievements and Milestones Section */}
        <div className="bg-gray-100 p-8 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-3xl font-bold text-[#1B3855] mb-4">Achievements and Milestones</h3>
          <p className="text-gray-600 font-semibold mb-4">
            Significant achievements or milestones
          </p >
          <p className="text-gray-600 font-semibold ml-2 ">
          Clearly defined :
          </p >
                    <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Goals</li>
            <li>Vision</li>
            <li>Mission</li>
            <li>Industry experience</li>
            <li>Know-how</li>
            <li>Proven business leadership skills</li>
          </ul>
          <h3 className="text-3xl font-bold text-[#1B3855] mb-4">Revenue and CSR</h3>

          <p className="text-gray-600 font-semibold mb-4 ml-4">
          Main Sources of Revenue: Sales of products and services.
          </p >

          <h3 className="text-3xl font-bold text-[#1B3855] mb-4">CSR Initiatives</h3>

          <p className="text-gray-600 font-semibold mb-2 ml-4">
          Skills development for the underprivileged through schools.
          </p >
          <p className="text-gray-600 font-semibold mb-4 ml-4">
          Shelter support for the elderly.
          </p >
        </div>

        {/* Short and Long Term Plans Section */}
        <div className="bg-gray-100 p-8 rounded-lg transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-bold text-[#1B3855] mb-4">Short and Long Term Plans</h2>

          <h3 className="text-2xl font-semibold text-[#1B3855] mb-4">Short-Term Plans (1-3 Years)</h3>
          <ol className="list-decimal list-inside text-gray-600 mb-6">
            <li>Market Penetration and Expansion</li>
            <li>Product and Service Development</li>
            <li>Infrastructure and Operations</li>
            <li>Regulatory Compliance</li>
            <li>Marketing and Branding</li>
            <li>Capacity Building</li>
          </ol>

          <h3 className="text-2xl font-semibold text-[#1B3855] mb-4">Long-Term Plans (5-10 Years)</h3>
          <ol className="list-decimal list-inside text-gray-600">
            <li>Regional and Global Expansion</li>
            <li>Research and Development</li>
            <li>Vertical Integration</li>
            <li>Technological Advancement</li>
            <li>Sustainability and Social Responsibility</li>
            <li>Customer and Market Diversification</li>
            <li>Human Capital Development</li>
            <li>Financial Growth and Stability</li>
          </ol>
        </div>
      </div>

      {/* Striped Background */}
      <div className="w-full h-1 bg-gray-300 mt-4 mb-6"></div>
    </div>
  );
};

export default WhyWorkWithUs;
