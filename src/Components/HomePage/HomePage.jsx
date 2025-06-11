import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero_banner from '../Assets/hero_banner.png';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <section className="hero-section">
        <img src={hero_banner} alt="Hero Banner" className="hero-image" onClick={()=>navigate('/')} />
        
      </section>
      <button className='heropage-button' onClick={()=>navigate('/eng11')}>Class 11 (English)</button>
      <button className='heropage-button' onClick={()=>navigate('/nep11')}>Class 11 (Nepali)</button>
      <button className='heropage-button'onClick={()=>navigate('/eng12')}>Class 12 (English)</button>
      <button className='heropage-button' onClick={()=>navigate('/nep12')}>Class 12 (Nepali)</button>
    </div>
  );
};

export default HomePage;