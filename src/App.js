import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; // Custom CSS for Navbar and Footer
import './index.css'; // Tailwind CSS styles
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import PharmaHealthcare from './pages/PharmaHealthcare';
import ExportTrade from './pages/ExportTrade';
import Agriculture from './pages/Agriculture';
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
            <Route path="/pharma-healthcare" element={<PharmaHealthcare />} />
            <Route path="/export-trade" element={<ExportTrade />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/why-work-with-us" element={<WhyWorkWithUs />} />
            

          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
