
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nepali11 = () => {
  const navigate = useNavigate();

  return (
    <div className='topic'>
      <div className='part1'>
        <p>Topic</p>
        <button onClick={() => navigate('/bir-purkha')}>1. Bir Purkha</button>
        <button onClick={() => navigate('/gau-ko-maya')}>2.Gau ko Maya</button>
        <button onClick={() => navigate('/sanskriti-ko-naya-yatra')}>3. Sanskriti ko Naya Yatra</button>
        <button onClick={() => navigate('/yogmaya')}>4. Yogmaya</button>
        <button onClick={() => navigate('/sathi-lai-chithi')}>5. Sathi lai Chithi</button>
        <button onClick={() => navigate('/tyo-feri-farkala')}>6. Tyo Feri Farkala</button>
        <button onClick={() => navigate('/paryaparyatanka-sambhabana-ra-ayam')}>7. Paryaparyatanka Sambhabana Ra Ayam</button>
        <button onClick={() => navigate('/lau-aayo-taja-khabar')}>8. Lau Aayo Taja Khabar</button>
        <button onClick={() => navigate('/safaltako-katha')}>9. Safaltako Katha</button>
        <button onClick={() => navigate('/krishi-sala-ma-ek-din')}>10. Krishi Sala Ma Ek Din</button>
        <button onClick={() => navigate('/rara-vraman')}>11. Rara Vraman</button>
        <button onClick={() => navigate('/jal-srot-ra-urja')}>12. Jal Srot Ra Urja</button>
      </div>
    </div>
  );
};

export default Nepali11;
