import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Nepali12 from './Components/Nepali12/Nepali12';
import English12 from './Components/English12/English12';
import Criticalthinking from './Components/English12/Eng12_contex/Criticalthinking';
import Family from './Components/English12/Eng12_contex/Family';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nep12" element={<Nepali12 />} />
        <Route path="/eng12" element={<English12 />} />
        <Route path="/criticalthinking" element={<Criticalthinking />} />
        <Route path="/family" element={<Family />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;



