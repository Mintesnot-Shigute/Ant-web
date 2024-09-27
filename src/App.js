import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; // Custom CSS for Navbar and Footer
import './index.css'; // Tailwind CSS styles
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PharmaProduct from './pages/PharmaProduct';
import PharmaService from './pages/PharmaService';
import ExportTradeProduct from './pages/ExportTradeProduct';
import ExportTradeService from './pages/ExportTradeService';
import AgricultureProduct from './pages/AgricultureProduct';
import AgricultureService from './pages/AgricultureService';
import Home from './pages/Home';  // Import the new Home page
import WhyWorkWithUs from './pages/WhyWorkWithUs';  // Import the new Home page


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="pt-28"> {/* Adjusted content section */}
          {/* Route definitions */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page route */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pharma-product" element={<PharmaProduct />} />
            <Route path="/pharma-service" element={<PharmaService />} />
            <Route path="/export-trade-product" element={<ExportTradeProduct />} />
            <Route path="/export-trade-service" element={<ExportTradeService />} />
            <Route path="/agricultureproduct" element={<AgricultureProduct />} />
            <Route path="/agricultureservice" element={<AgricultureService />} />
            <Route path="/why-work-with-us" element={<WhyWorkWithUs />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
