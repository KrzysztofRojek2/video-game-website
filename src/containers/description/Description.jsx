import React, {useState} from 'react'
import './description.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Description = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    const container = document.querySelector('.expandable-container');
    if (!isExpanded) {
      container.style.maxHeight = '500px';
      container.classList.add('expanded');
      setIsExpanded(true);
    } else {
      container.style.maxHeight = '200px';
      container.classList.remove('expanded');
      setIsExpanded(false);
    }
  };
  

  return (
    <div className='description'>
      <div className="description__text">
        <h3>Embark on an adventure...</h3>
        <div className='expandable-container'>
          <p>Step into the fantastical realm of Eo and command your forces in 'SpellForce: Conquest of Eo.' This captivating fusion of real-time strategy and role-playing invites players to explore vast landscapes, unleash potent magic, and shape the fate of nations. With its rich narrative, breathtaking visuals, and tactical depth, 'SpellForce: Conquest of Eo' promises an unforgettable gaming experience for adventurers and strategists alike. Are you prepared to leave your mark on the tapestry of Eo's history?</p>
        </div>
        <div className='expansion-toggle' onClick={toggleExpansion} ><FontAwesomeIcon className='description__plus-icon' icon={faPlus}/> <h3>Read more</h3></div>
      </div>
      <div className="description__image">
        <img src="src\assets\slider-img1.jpg" alt="main-image" />
      </div>
      
    </div>
  )
}

export default Description
