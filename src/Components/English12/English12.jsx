import React from 'react'
import './English12.css'
import { useNavigate } from 'react-router-dom' 

const English12 = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      <div className='topic'>
        <div className="part1">
          <p>Section: Language Development</p>
          <p>Topic</p>
          <button onClick={() => navigate('/criticalthinking')}>1. Critical Thinking</button>
          <button onClick={() => navigate('/family')} >2. Family</button>
          <button onClick={() => navigate('/sports')}>3. Sports</button>
          <button onClick={() => navigate('/technology')}>4. Technology</button>
          <button onClick={() => navigate('/education')}>5. Education</button>
          <button onClick={() => navigate('/moneyandeconomy')}>6. Money and Economy</button>
          <button onClick={() => navigate('/humour')}>7. Humour</button>
          <button onClick={() => navigate('/humanculture')}>8. Human Culture</button>
          <button onClick={() => navigate('/ecologyandenvironment')}>9. Ecology and Environment</button>
          <button onClick={() => navigate('/careeropportunities')}>10. Career Opportunities</button>
          <button onClick={() => navigate('/hobbies')}>11. Hobbies</button>
          <button onClick={() => navigate('/animalworld')}>12. Animal World</button>
          <button onClick={() => navigate('/history')}>13. History</button>
          <button onClick={() => navigate('/humanrights')}>14. Human Rights</button>
          <button onClick={() => navigate('/leisureandentertainment')}>15. Lelsure and Entertainment</button>
          <button onClick={() => navigate('/fantasy')}>16. Fantasy</button>
          <button onClick={() => navigate('/warandpeace')}>17. War and Peace</button>
          <button onClick={() => navigate('/musicandcreation')}>18. Music and Creation</button>
          <button onClick={() => navigate('/migrationanddiaspora')}>19. Migration and Diaspora</button>
          <button onClick={() => navigate('/powerandpolitics')}>20. Power and Politics</button>
        </div>
        <div className="part2">
          <p>Section: Literature</p>
          <p>Short Stories</p>
          <button onClick={() => navigate('/neighbour')}>1. Neighbours</button>
          <button onClick={() => navigate('/arespectablewoman')}>2. A Respectable Woman</button>
          <button onClick={() => navigate('/adevotedson')}>3. A Devoted Son</button>
          <button onClick={() => navigate('/the-treasure-in-the-forest')}>4. The Treasure in the Forest</button>
          <button onClick={() => navigate('/my-old-home')}>5. My Old Home</button>
          <button onClick={() => navigate('/the-half-closed-eyes')}>6. The Half-closed Eyes of the Buddha and the Slowly Sinking Sun</button>
          <button onClick={() => navigate('/a-very-old-man-with-enormous-wings')}>7. A Very Old Man with Enormous Wings</button>
          <p >Poems</p>
          <button onClick={() => navigate('/a-day')}>1. A Day</button>
          <button onClick={() => navigate('/every-morning-i-wake')}>2. Every Morning I Wake</button>
          <button onClick={() => navigate('/i-was-my-own-route')}>3. I Was My Own Route</button>
          <button onClick={() => navigate('/the-awakening-age')}>4. The Awakening Age</button>
          <button onClick={() => navigate('/soft-storm')}>5. Soft Storm</button>
          <p>Essays</p>
          <button onClick={() => navigate('/on-libraries')}>1. On Libraries</button>
          <button onClick={() => navigate('/marriage-as-a-social-institution')}>2. Marriage as a Social Institution</button>
          <button onClick={() => navigate('/a-day')}>3. A Day</button>
          
          <p>One-act Plays</p>
          <button onClick={() => navigate('/a-matter-for-husband')}>1. A Matter for Husband</button>
          <button onClick={() => navigate('/facing-death')}>2. Facing Death</button>
          <button onClick={() => navigate('/the-bull')}>3. The Bull</button>
        </div>
      </div>
    </div>
  )
}

export default English12

