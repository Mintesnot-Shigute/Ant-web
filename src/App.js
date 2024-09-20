import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; // Custom CSS for Navbar and Footer
import './index.css'; // Tailwind CSS styles
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PharmaHealthcareProducts from './pages/PharmaHealthcareProducts';
import PharmaHealthcareServices from './pages/PharmaHealthcareServices';
import ExportTradeProducts from './pages/ExportTradeProducts';
import ExportTradeServices from './pages/ExportTradeServices';
import AgricultureProducts from './pages/AgricultureProducts';
import AgricultureServices from './pages/AgricultureServices';
import Home from './pages/Home';  // Import the new Home page

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
            <Route path="/pharma-healthcare-products" element={<PharmaHealthcareProducts />} />
            <Route path="/pharma-healthcare-services" element={<PharmaHealthcareServices />} />
            <Route path="/export-trade-products" element={<ExportTradeProducts />} />
            <Route path="/export-trade-services" element={<ExportTradeServices />} />
            <Route path="/agriculture-products" element={<AgricultureProducts />} />
            <Route path="/agriculture-services" element={<AgricultureServices />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
