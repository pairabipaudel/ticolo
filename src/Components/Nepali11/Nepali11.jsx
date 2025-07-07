import React from 'react'
import { useNavigate } from 'react-router-dom';
const Nepali11 = () => {
   const navigate = useNavigate();
  return (
    <div className='topic'>
      <div className='part1'>
          <button onClick={() => navigate('/bir-purkha')}>Bir Purkha</button>
          <button onClick={() => navigate('/gau-ko-maya')}>Gau ko Maya</button>
          <button onClick={() => navigate('/sanskriti-ko-naya-yatra}>Sanskriti ko Naya yatra</button>
          <button onClick={() => navigate('/yogmaya')}>Yogmaya</button>
          <button onClick={() => navigate('/sathi-lai-chithi')}>Sathi lai chithi</button>
          <button onClick={() => navigate('/tyo-feri-farkala')}>Tyo Feri Farkala</button>
          <button onClick={() => navigate('/paryaparyatanka-sambhabana-ra-ayam')}>Paryaparyatanka Sambhabana Ra Ayam </button>
          <button onClick={() => navigate('/lau-aayo-taja-khabar')}>Lau Aayo Taja Khabar</button>
          <button onClick={() => navigate('/safaltako-katha')}>Safaltako Katha</button>
          <button onClick={() => navigate('/krishi-sala-ma-ek-din')}>Krishi Sala Ma Ek din</button>
          <button onClick={() => navigate('/rara-vraman')}>Rara Vraman</button>
          <button onClick={() => navigate('/jal-srot-ra-urja')}>Jal Srot Ra Urja</button>
      </div>
    </div>
  )
}

export default Nepali11
