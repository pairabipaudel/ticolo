import React from 'react';
import './Footer.css';
import instagram_icon from '../Assets/instagram_icon.png';
import facebook_icon from '../Assets/facebook_icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">Contact Us:</p>
      <div className="social-icons">
        <img src={instagram_icon} alt="Instagram" />
        <img src={facebook_icon} alt="Facebook" />
      </div>
    </footer>
  );
};

export default Footer;