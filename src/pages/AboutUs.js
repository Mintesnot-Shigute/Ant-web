import React from 'react';

function AboutUs() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#0E74A4]">About Us</h1>

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
            src="/image2.jpg" 
            alt="About Us" 
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#0E74A4]">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our vision is to transform lives and livelihoods through cutting-edge solutions in healthcare, trade, 
            agriculture, and IT, expanding our reach from Ethiopia to the world.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#0E74A4]">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to empower communities with innovative and holistic solutions by blending local insights 
            with global excellence, enhancing livelihoods and driving sustainable growth.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-[#0E74A4]">Our Core Values</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 list-disc ml-6 text-lg text-gray-700 gap-4 mb-12">
        {['Innovation', 'Integrity', 'Excellence', 'Sustainability', 'Collaboration', 'Empowerment', 
          'Customer Focus', 'Adaptability', 'Respect', 'Global Vision'].map((value, index) => (
          <li 
            key={index} 
            className="p-4 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 mb-2"
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutUs;
