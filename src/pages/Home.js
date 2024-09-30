import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const images = [
    "/image1.jpg",
    "/image2.png",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setAutoPlay(true); // Restart auto-play when a dot is clicked
  };

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(handleNext, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoPlay, handleNext]);

  return (
    <div className='bg-gray-100'>
      {/* Hero Section with Carousel */}
      <div className="relative h-[300px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 flex transition-transform duration-1000">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-full flex-shrink-0 transition-all duration-1000 ease-in-out ${
                currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover md:h-[500px] h-[300px]" // Ensure proper sizing on mobile
              />
            </div>
          ))}
        </div>
        {/* Dot Navigation */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-[#0E74A4]' : 'bg-gray-300 hover:bg-[#0E74A4]'}`}
            />
          ))}
        </div>
      </div>

      {/* Slogan Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-6 md:mt-12 mb-6 px-4 md:px-6 max-w-7xl mx-auto space-y-4 md:space-y-0">
        <div className="md:w-1/4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0E74A4]">
            ANT General Trading and Industries Holding
          </h2>
        </div>
        <div className="md:w-1/2 px-2 md:px-4">
          <p className="text-gray-600 text-sm md:text-base ">
            ANT General Trading and Industries Holding is deeply committed to transforming lives
            and inspiring futures through innovative, holistic solutions in pharmaceuticals and
            healthcare, export trade, agriculture, and food processing.
          </p>
        </div>
        <div className="md:w-1/2 px-2 md:px-4">
          <p className="text-gray-600 text-sm md:text-base ">
            With a steadfast dedication to quality, excellence, and sustainability,
            we empower individuals and communities, providing the resources and tools
            they need to thrive.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="text-center mt-8 md:mt-12 py-12 bg-gray-50">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#0E74A4] mb-8 hover:text-gray-600 transition-colors duration-300">
          Business Verticals
        </h3>

        {/* Services Icons */}
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-12 space-y-8 md:space-y-0">
          {/* Pharmaceuticals & Healthcare */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1B3855] rounded-full overflow-hidden flex items-center justify-center shadow-md mb-4 transition-transform transform hover:scale-105">
              <img
                src="/national-cancer-institute-aelk4Tn0vlI-unsplash.jpg"
                alt="Pharmaceuticals & Healthcare"
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="text-lg md:text-xl font-semibold mb-1">Pharmaceuticals & Healthcare</h4>
            <p className="text-gray-600 mb-2 max-w-xs text-center">
              We offer a wide range of essential and specialty pharmaceuticals, diagnostics, and medical equipment.
            </p>
            <Link to="/pharma-healthcare" className="w-full">
              <button className="bg-[#1B3855] text-white py-1 px-4 md:py-2 md:px-6 rounded-full hover:bg-[#0E74A4] transition w-full">
                Read More
              </button>
            </Link>
          </div>

          {/* Export Trade */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1B3855] rounded-full overflow-hidden flex items-center justify-center shadow-md mb-4 transition-transform transform hover:scale-105">
              <img src="/image4.jpg" alt="Export Trade" className="h-full w-full object-cover" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold mb-1">Export Trade</h4>
            <p className="text-gray-600 mb-2 max-w-xs text-center">
              We specialize in sourcing and exporting premium coffee, oil seeds, and other products.
            </p>
            <Link to="/export-trade" className="w-full">
              <button className="bg-[#1B3855] text-white py-1 px-4 md:py-2 md:px-6 rounded-full hover:bg-[#0E74A4] transition w-full">
                Read More
              </button>
            </Link>
          </div>

          {/* Agriculture & Food Processing */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#1B3855] rounded-full overflow-hidden flex items-center justify-center shadow-md mb-4 transition-transform transform hover:scale-105">
              <img src="/AgriCollage.jpg" alt="Agriculture & Food Processing" className="h-full w-full object-cover" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold mb-1">Agriculture & Food Processing</h4>
            <p className="text-gray-600 mb-2 max-w-xs text-center">
              Our agriculture and food processing services help to enhance the value of farm produce in many aspects.
            </p>
            <Link to="/agriculture" className="w-full">
              <button className="bg-[#1B3855] text-white py-1 px-4 md:py-2 md:px-6 rounded-full hover:bg-[#0E74A4] transition w-full">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
