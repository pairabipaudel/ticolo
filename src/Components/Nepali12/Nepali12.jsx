import React from 'react';
import './Nepali12.css';
import { useNavigate } from 'react-router-dom';

const Nepali12 = () => {
  const navigate = useNavigate();

  return (
    <div className="topic">
      <div className="part1">
        <p>Topic</p>
        <button onClick={() => navigate('/aama-ko-sapana')}>1. Aama ko Sapana</button>
        <button onClick={() => navigate('/birahini-damayanti')}>2. Birahini Damayanti</button>
        <button onClick={() => navigate('/ghanaghasyako-ukalo-katta')}>3. Ghanaghasyako Ukalo Katta</button>
        <button onClick={() => navigate('/byabasayik-patra')}>4. Byabasayik Patra</button>
        <button onClick={() => navigate('/ek-chihan')}>5. Ek Chihan</button>
        <button onClick={() => navigate('/stephen-william-hawking')}>6. Stephen William Hawking</button>
        <button onClick={() => navigate('/hamilai-bolaucha-himchuli')}>7. Hamilai Bolaucha Himchuli</button>
        <button onClick={() => navigate('/matrittwo')}>8. Matrittwo</button>
        <button onClick={() => navigate('/gorkhe')}>9. Gorkhe</button>
        <button onClick={() => navigate('/nepali-pahichan')}>10. Nepali Pahichan</button>
        <button onClick={() => navigate('/sahakaari')}>11. Sahakaari</button>
      </div>
    </div>
  );
};

export default Nepali12;
