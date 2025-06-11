import React from 'react';
import { useNavigate } from 'react-router-dom';
import ticolo_logo from '../Assets/ticolo_logo.png';
import './Navbar.css'
const Navbar = () => {
   const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo and name */}
        <div className="logo-section">
          <img src={ticolo_logo} alt="Ticolo Logo" className="logo-img" onClick={()=>navigate('/')} />
          <p className="brand-name" onClick={()=>navigate('/')}>Ticolo</p>
        </div>

        
      </div>
    </header>
  );
};

export default Navbar;



