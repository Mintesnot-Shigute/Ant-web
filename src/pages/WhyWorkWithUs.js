import React from 'react';

const WhyWorkWithUs = () => {
  return (
    <div className="bg-gray-100 py-8 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 p-4 rounded-lg"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, #e5e7eb 0, #e5e7eb 10px, #f3f4f6 30px, #f3f4f6 30px)',
          }}
        >
          Why Work With Us
        </h1>

      
      </div>

      <div className="max-w-5xl mx-auto">
        <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed text-justify">
          At ANT General Trading and Industries, we believe that true success comes
          from empowering communities, fostering innovation, and upholding the highest 
          standards of excellence. When you choose to work with us, you become part of a 
          mission-driven organization that is reshaping industries across Pharmaceuticals 
          and Healthcare, Commodity Trade, and Agriculture and Food Processing-driven by technology,
          sustainability, and a vision for a brighter future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: 'Visionary Leadership and Strategic Growth',
              content: 'ANT is led by a seasoned team of business leaders, innovators, and experts who understand the local and global landscapes. With a clear vision of transforming lives and livelihoods, we are committed to sustainable growth through strategic expansion, research and development, and cutting-edge solutions.'
            },
            {
              title: 'Innovation at Our Core',
              content: 'We embrace innovation, continuously pushing the boundaries to deliver pioneering solutions in every sector we touch. Partnering with us means being part of a future where solutions are designed with both local insights and global impact in mind.'
            },
            {
              title: 'Commitment to Quality and Excellence',
              content: 'At ANT, excellence is not just a goal—it is our standard. Every product, service, and partnership we engage in is rooted in a commitment to quality, ensuring unparalleled value to our clients and stakeholders.'
            },
            {
              title: 'A Global Perspective with Local Expertise',
              content: 'We blend local insights with a global vision, creating solutions tailored to the local market while being competitive globally. Gain access to international partnerships and best-in-class practices by working with us.'
            },
            {
              title: 'Social Responsibility and Sustainability',
              content: 'We are more than just a business—we are a catalyst for positive change. Our CSR initiatives, including skills development for the underprivileged and shelter support for the elderly, reflect our dedication to giving back to the communities we serve.'
            },
            {
              title: 'Empowerment and Collaboration',
              content: 'At the heart of everything we do is a commitment to empowering individuals and communities. From job creation to fostering partnerships, we believe that growth is achieved through collaboration and empowerment.'
            },
            {
              title: 'Long-term Partnerships for Sustainable Growth',
              content: 'We are committed to creating lasting partnerships with clients and stakeholders who share our vision for sustainable, ethical, and impactful growth. Join us in shaping a better future.'
            },
          ].map(({ title, content }, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-4 md:p-6 hover:bg-gray-200 hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
              <p className="text-gray-600 text-sm md:text-base">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
