import React from 'react';

const WhyWorkWithUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 bg-gray-200">Why Work With Us?</h1>
        <p className="text-2xl text-gray-600 mt-4">
          ANT General Trading and Industries Holding is deeply committed to transforming lives 
          and inspiring futures through innovative, holistic solutions in pharmaceuticals and healthcare, 
          export trade, agriculture, and food processing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#1B3855] mb-4">Quality Control</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Rigorous quality testing and certification processes</li>
            <li>Implementation of quality assurance protocols to ensure product consistency and safety</li>
            <li>Traceability systems to track products from farm to export</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#1B3855] mb-4">Logistics and Export</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Efficient supply chain management and logistics coordination</li>
            <li>Handling of export documentation and regulatory compliance</li>
            <li>Coordination with shipping and freight companies for timely delivery</li>
            <li>Warehousing and inventory management</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#1B3855] mb-4">Market Research and Development</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Market analysis and identification of potential export markets</li>
            <li>Development of marketing strategies to promote products internationally</li>
            <li>Participation in trade shows and international exhibitions</li>
            <li>Building and maintaining relationships with international buyers</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#1B3855] mb-4">Consultation and Advisory</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Advisory services for farmers and cooperatives on best agricultural practices</li>
            <li>Training programs for improving product quality and yield</li>
            <li>Guidance on international trade regulations and export procedures</li>
            <li>Support in obtaining necessary certifications (e.g., organic, fair trade)</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-[#1B3855] mb-4">Sustainability and Social Responsibility</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Implementation of sustainable farming practices</li>
            <li>Support for community development projects</li>
            <li>Ensuring fair trade and ethical sourcing practices</li>
            <li>Promoting environmental conservation and biodiversity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
