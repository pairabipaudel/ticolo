import React from 'react';
import './English11.css';
import { useNavigate } from 'react-router-dom';

const English11 = () => {
  const navigate = useNavigate();

  return (
    <div className="topic">
      <div className="part1">
        <p >Section: Language Development</p>
        <p >Topics</p>
        <button onClick={() => navigate('/education-and-humanity')}>1. Education and Humanity</button>
        <button onClick={() => navigate('/communication')}>2. Communication</button>
        <button onClick={() => navigate('/media-and-society')}>3. Media and Society</button>
        <button onClick={() => navigate('/history-and-culture')}>4. History and Culture</button>
        <button onClick={() => navigate('/life-and-love')}>5. Life and Love</button>
        <button onClick={() => navigate('/health-and-exercise')}>6. Health and Exercise</button>
        <button onClick={() => navigate('/ecology-and-development')}>7. Ecology and Development</button>
        <button onClick={() => navigate('/humour-and-satire')}>8. Humour and Satire</button>
        <button onClick={() => navigate('/democracy-and-human-rights')}>9. Democracy and Human Rights</button>
        <button onClick={() => navigate('/home-life-and-family-relationship')}>10. Home life and Family Relationship</button>
        <button onClick={() => navigate('/arts-and-creations')}>11. Arts and Creations</button>
        <button onClick={() => navigate('/fantasy')}>12. Fantasy</button>
        <button onClick={() => navigate('/career-and-entrepreneurship')}>13. Career and Entrepreneurship</button>
        <button onClick={() => navigate('/power-and-politics')}>14. Power and Politics</button>
        <button onClick={() => navigate('/war-and-peace')}>15. War and Peace</button>
        <button onClick={() => navigate('/critical-thinking')}>16. Critical Thinking</button>
        <button onClick={() => navigate('/globalisation-and-diaspora')}>17. Globalisation and Diaspora</button>
        <button onClick={() => navigate('/immigration-and-identity')}>18. Immigration and Identity</button>
        <button onClick={() => navigate('/travel-and-tourism')}>19. Travel and Tourism</button>
        <button onClick={() => navigate('/science-and-technology')}>20. Science and Technology</button>
      </div>
      <div  className="part2">
         <div>
          <p>Section: Literature</p>
          <p>Short Stories</p>
          <button onClick={() => navigate('/the-selfish-giant')}>1. The Selfish Giant</button>
          <button onClick={() => navigate('/the-oval-portrait')}>2. The Oval Portrait</button>
          <button onClick={() => navigate('/god-sees-the-truth-but-waits')}>3. God sees the Truth but Waits</button>
          <button onClick={() => navigate('/the-wish')}>4. The Wish</button>
          <button onClick={() => navigate('/civil-peace')}>5. Civil Peace</button>
          <button onClick={() => navigate('/two-little-soldiers')}>6. Two Little Soldiers</button>
          <button onClick={() => navigate('/an-astrologers-day')}>7. An Astrologer's Day</button>
          <p >Poems</p>
          <button onClick={() => navigate('/corona-says')}>1. Corona Says</button>
          <button onClick={() => navigate('/a-red-red-rose')}>2. A Red, Red Rose</button>
          <button onClick={() => navigate('/all-the-worlds-a-stage')}>3. All the World's a Stage</button>
          <button onClick={() => navigate('/who-are-you-little-i')}>4. Who are you, little I?</button>
          <button onClick={() => navigate('/the-gift-in-wartime')}>5. The Gift in Wartime</button>
          <p>Essays</p>
          <button onClick={() => navigate('/sharing-tradition')}>1. Sharing Tradition</button>
          <button onClick={() => navigate('/how-to-live-before-you-die')}>2. How to Live Before You Die</button>
          <button onClick={() => navigate('/what-i-require-from-life')}>3. What I Require from Life</button>
          <button onClick={() => navigate('/what-is-poverty')}>4. What is Poverty?</button>
          <button onClick={() => navigate('/scientific-research-is-a-token-of-humankinds-survival')}>5. Scientific Research is a Token of Humankind's Survival</button>

          <p>One-act Plays</p>
          <button onClick={() => navigate('/trifles')}>1. Trifles</button>
          <button onClick={() => navigate('/a-sunny-morning')}>2. A sunny Morning</button>
          <button onClick={() => navigate('/refund')}>3. Refund</button>
        </div>
      </div>
    </div>
  );
};

export default English11;
