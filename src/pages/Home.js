import React, { useState, useEffect, useCallback, useRef } from 'react';

function Home() {
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null); // Use useRef to keep track of the interval

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handleImageClick = (index) => {
    setCurrentIndex(index); // Update index based on clicked image
    resetInterval(); // Reset the interval on image click
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current); // Clear existing interval
    intervalRef.current = setInterval(handleNext, 2000); // Start a new interval
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleNext, 2000); // Change image every 2 seconds
    return () => clearInterval(intervalRef.current); // Clean up on unmount
  }, [handleNext]);

  return (
    <div>
      {/* Hero Section with Carousel */}
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 cursor-pointer"
              onClick={() => handleImageClick(index)} // Change image on click
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover" // Use object-contain to show full image
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slogan Section */}
      <div className="flex justify-between items-start mt-12 mb-8 px-6 max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="w-1/4 ml-20">
          <h2 className="text-3xl font-bold text-[#0E74A4]">
            ANT General Trading and Industries Holding
          </h2>
        </div>

        {/* First Column Content */}
        <div className="w-1/4 px-2 ml-12">
          <p className="text-gray-600 text-base text-justify">
            ANT General Trading and Industries Holding is deeply committed to transforming
            lives and inspiring futures through innovative, holistic solutions in pharmaceuticals
            and healthcare, export trade, agriculture, and food processing.
          </p>
        </div>

        {/* Second Column Content */}
        <div className="w-1/4 px-2 ml-12">
          <p className="text-gray-600 text-base text-justify">
            With a steadfast dedication to quality, excellence, and sustainability,
            we empower individuals and communities, providing the resources and tools they need to thrive.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center mt-12 py-12 bg-gray-50">
        <h3 className="text-2xl font-semibold text-green-600 mb-10">Our Services</h3>
        {/* Services Icons */}
        <div className="flex justify-center space-x-12">
          {/* Pharmaceuticals & Healthcare */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-[#1B3855] rounded-full overflow-hidden flex items-center justify-center shadow-md mb-6 transition-transform transform hover:scale-105">
              <img src="/national-cancer-institute-aelk4Tn0vlI-unsplash.jpg" alt="Pharmaceuticals & Healthcare" className="h-full w-full object-cover" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Pharmaceuticals & Healthcare</h4>
            <p className="text-gray-600 mb-4 max-w-xs text-center">
              We offer a wide range of essential and specialty pharmaceuticals, diagnostics, and medical equipment.
            </p>
            <button className="bg-[#1B3855] text-white py-2 px-6 rounded-full hover:bg-[#0E74A4] transition w-full">Read More</button>
          </div>

          {/* Export Trade */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-[#1B3855] rounded-full overflow-hidden flex items-center justify-center shadow-md mb-6 transition-transform transform hover:scale-105">
              <img src="/image4.jpg" alt="Export Trade" className="h-full w-full object-cover" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Export Trade</h4>
            <p className="text-gray-600 mb-4 max-w-xs text-center">
              We specialize in sourcing and exporting premium coffee, oil seeds, and other products.
            </p>
            <button className="bg-[#1B3855] text-white py-2 px-6 rounded-full hover:bg-[#0E74A4] transition w-full">Read More</button>
          </div>

          {/* Agriculture & Food Processing */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-[#1B3855] rounded-full overflow-hidden flex items-center justify-center shadow-md mb-6 transition-transform transform hover:scale-105">
              <img src="/image1.jpg" alt="Agriculture & Food Processing" className="h-full w-full object-cover" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Agriculture & Food Processing</h4>
            <p className="text-gray-600 mb-4 max-w-xs text-center">
              Our agriculture and food processing services help to enhance the value of farm produce in many aspects.
            </p>
            <button className="bg-[#1B3855] text-white py-2 px-6 rounded-full hover:bg-[#0E74A4] transition w-full">Read More</button>
          </div>
        </div>
      </div>

      {/* New Section Below Services */}
      <div className="py-12 px-6 bg-gray-100">
  <h3 className="text-2xl font-semibold text-green-600 mb-6 text-center">Our Commitment</h3>
  <div className="max-w-7xl mx-auto text-gray-600 text-base">
    {[
      {
        title: "Quality Control",
        items: [
          "Rigorous quality testing and certification processes",
          "Implementation of quality assurance protocols to ensure product consistency and safety",
          "Traceability systems to track products from farm to export",
        ],
      },
      {
        title: "Logistics and Export",
        items: [
          "Efficient supply chain management and logistics coordination",
          "Handling of export documentation and regulatory compliance",
          "Coordination with shipping and freight companies for timely delivery",
          "Warehousing and inventory management",
        ],
      },
      {
        title: "Market Research and Development",
        items: [
          "Market analysis and identification of potential export markets",
          "Development of marketing strategies to promote products internationally",
          "Participation in trade shows and international exhibitions",
          "Building and maintaining relationships with international buyers",
        ],
      },
      {
        title: "Consultation and Advisory",
        items: [
          "Advisory services for farmers and cooperatives on best agricultural practices",
          "Training programs for improving product quality and yield",
          "Guidance on international trade regulations and export procedures",
          "Support in obtaining necessary certifications (e.g., organic, fair trade)",
        ],
      },
      {
        title: "Sustainability and Social Responsibility",
        items: [
          "Implementation of sustainable farming practices",
          "Support for community development projects",
          "Ensuring fair trade and ethical sourcing practices",
          "Promoting environmental conservation and biodiversity",
        ],
      },
    ].map(({ title, items }) => (
      <div key={title} className="mb-8">
        <h4 className="font-bold text-lg mt-4 mb-2 text-[#1B3855]">{title}</h4>
        <ul className="list-disc list-inside pl-6 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="transition duration-300 ease-in-out transform hover:translate-x-1 hover:text-[#0E74A4]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Home;
