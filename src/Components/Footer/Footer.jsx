import React from 'react';
import './Footer.css';
import instagram_icon from '../Assets/instagram_icon.png';
import facebook_icon from '../Assets/facebook_icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">Contact Us:</p>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/ticoloplus2?igsh=MWNobjd3MHgxMjBpeQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram_icon} alt="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/share/1Akd4szNN4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook_icon} alt="Facebook" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
