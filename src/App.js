import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Nepali12 from './Components/Nepali12/Nepali12';
import English12 from './Components/English12/English12';
import Criticalthinking from './Components/English12/Eng12_contex/Criticalthinking';
import Family from './Components/English12/Eng12_contex/Family';
import Education from './Components/English12/Eng12_contex/Education';
import Humour from './Components/English12/Eng12_contex/Humour';
import Moneyandeconomy from './Components/English12/Eng12_contex/Moneyandeconomy';
import Sports from './Components/English12/Eng12_contex/Sports';
import Technology from './Components/English12/Eng12_contex/Technology';
import HumanCulture from './Components/English12/Eng12_contex/HumanCulture';
import Ecologyandenvironment from './Components/English12/Eng12_contex/Ecologyandenvironment';
import Careeropportunities from './Components/English12/Eng12_contex/Careeropportunities';
import Hobbies from './Components/English12/Eng12_contex/Hobbies';
import Animalworld from './Components/English12/Eng12_contex/Animalworld';
import Humanrights from './Components/English12/Eng12_contex/Humanrights';
import Leisureandentertainment from './Components/English12/Eng12_contex/Leisureandentertainment';
import History from './Components/English12/Eng12_contex/History';
import Fantasy from './Components/English12/Eng12_contex/Fantasy';
import Warandpeace from './Components/English12/Eng12_contex/Warandpeace';
import Musicancreation from './Components/English12/Eng12_contex/Musicandcreation';
import Migrationanddiaspora from './Components/English12/Eng12_contex/Migrationanddiaspora';
import Powerandpolitics from './Components/English12/Eng12_contex/Powerandpolitics';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nep12" element={<Nepali12 />} />
        <Route path="/eng12" element={<English12 />} />
        <Route path="/criticalthinking" element={<Criticalthinking />} />
        <Route path="/education" element={<Education />} />
        <Route path="/family" element={<Family />} />
        <Route path="/humour" element={<Humour />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/humanculture" element={<HumanCulture />} />
        <Route path="/ecologyandenvironment" element={<Ecologyandenvironment />} />
        <Route path="/moneyandeconomy" element={<Moneyandeconomy />} />
        <Route path="/careeropportunities" element={<Careeropportunities />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/animalworld" element={<Animalworld />} />
        <Route path="/history" element={<History />} />
        <Route path="/humanrights" element={<Humanrights />} />
        <Route path="/leisureandentertainment" element={<Leisureandentertainment />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/warandpeace" element={<Warandpeace />} />
        <Route path="/musicancreation" element={<Musicancreation />} />
        <Route path="/migrationanddiaspora" element={<Migrationanddiaspora />} />
        <Route path="/powerandpolitics" element={<Powerandpolitics />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
