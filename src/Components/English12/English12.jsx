import React from 'react'
import './English12.css'
import { useNavigate } from 'react-router-dom' // 👈 useNavigate instead of Navigate

const English12 = () => {
  const navigate = useNavigate(); // 👈 call the hook inside the component

  return (
    <div>
      <div className='topic'>
        <div className="part1">
          <p>Section: Language Development</p>
          <p>Topic</p>
          <button onClick={() => navigate('/criticalthinking')}>1. Critical Thinking</button>
          <button onClick={() => navigate('/family')} >2. Family</button>
          <button>3. Sports</button>
          <button>4. Technology</button>
          <button>5. Education</button>
          <button>6. Money and Economy</button>
          <button>7. Humour</button>
          <button>8. Human Culture</button>
          <button>9. Ecology and Environment</button>
          <button>10. Carrer Opportunities</button>
          <button>11. Hobbies</button>
          <button>12. Animal World</button>
          <button>13. History</button>
          <button>14. Human Rights</button>
          <button>15. Lelsure and Entertainment</button>
          <button>16. Fantasy</button>
          <button>17. War and Peace</button>
          <button>18. Music and Creation</button>
          <button>19. Migration and Diaspora</button>
          <button>20. Power and Politics</button>
        </div>
        <div className="part2">
          <p>Section: Literature</p>
          <p>Short Stories</p>
          <button>1. Neighbours</button>
          <button>2. A Respectable Woman</button>
          <button>3. A Devoted Son</button>
          <button>4. The Treasure in the Forest</button>
          <button>5. My Old Home</button>
          <button>6. The Half-closed Eyes of the Buddha and the Slowly Sinking Sun</button>
          <button>7. A Very Old Man with Enormous Wings</button>
          <p>Poems</p>
          <button>1. A Day</button>
          <button>2. Every Morning I Wake</button>
          <button>3. I Was My Own Route</button>
          <button>4. The Awakening Age</button>
          <button>5. Soft Storm</button>
          <p>Essays</p>
          <button>1. On Libraries</button>
          <button>2. Marriage as a Social Institution</button>
          <button>3. A Day</button>
          <button>4. A Day</button>
          <button>5. A Day</button>
          <p>One-act Plays</p>
          <button>1. A Matter for Husband</button>
          <button>2. Facing Death</button>
          <button>3. The Bull</button>
        </div>
      </div>
    </div>
  )
}

export default English12

