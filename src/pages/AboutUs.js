import React from 'react';

function AboutUs() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#0E74A4]">Who We Are</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to ANT General Trading and Industries Holding! Our company is a leader in delivering innovative,
            holistic solutions in pharmaceuticals, healthcare, export trade, and agriculture. We are committed to
            empowering communities by providing the tools and resources they need to thrive.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <img
            src="/pharma.jpg"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#0E74A4]">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our vision is to transform lives and livelihoods through cutting-edge solutions in healthcare, trade,
            agriculture, and IT, expanding our reach from Ethiopia to the world.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-[#0E74A4]">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to empower communities with innovative and holistic solutions by blending local insights
            with global excellence, enhancing livelihoods and driving sustainable growth.
          </p>
        </div>
      </div>

      {/* Core Values Section as a vertical list */}
                            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-[#0E74A4]">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Change to grid layout */}
                {[
                  'Innovation',
                  'Integrity',
                  'Excellence',
                  'Sustainability',
                  'Collaboration',
                  'Empowerment',
                  'Customer Focus',
                  'Adaptability',
                  'Respect',
                  'Global Vision',
                ].map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-200"
                  >
                    <span className="w-3 h-3 bg-[#1B3855] rounded-full mr-2"></span> {/* Smaller dot and reduced margin */}
                    <span className="text-lg text-gray-700 max-w-xs">{value}</span> {/* Limit the width of text */}
                  </div>
                ))}
              </div>
            </div>




      {/* Governance and Number of Employees Section */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-6 mt-12">
        <div className="flex-1 mb-6 md:mr-6">
          <h2 className="text-2xl font-bold mb-4 text-[#0E74A4] text-center hover:text-gray-600 transition-colors duration-300">Governance</h2>
          <p className="text-lg text-gray-700 mb-4">
            The company is governed by a Board of Directors (BoD) chaired by an
            Executive Chairman, providing strategic oversight and governance. The
            CEO, reporting directly to the Board, leads the operational execution and is
            responsible for the overall performance of the business. Below the CEO
            are Managing Directors (MDs) for each of the company's core verticals:
            Pharmaceuticals and Healthcare, Export Trade, and Agriculture and
            Food Processing. These MDs manage their respective verticals, ensuring
            alignment with the company's strategic goals while driving growth,
            innovation, and efficiency in their areas. This structure allows for clear
            accountability, streamlined decision-making, and focused leadership
            across the business sectors.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[#0E74A4] text-center hover:text-gray-600 transition-colors duration-300">Number of Employees</h2>
          <p className="text-lg text-gray-700">
            Initially 40 employees, with ambition to create job opportunities for over
            2,000 employees as all subsidiaries become functional.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/governance.png" // replace with actual image path
            alt="Governance"
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
