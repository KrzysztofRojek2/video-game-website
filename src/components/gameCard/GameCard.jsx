import React from 'react'
import './gameCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const GameCard = ({imgPath, title, price, console}) => {
  return (
    <div className='game-card'>
      <div className='game-card__img'>
        <img src={imgPath} alt="sug1" />
      </div>
      <div className='game-card__text'>
        <h4>{title}</h4>
        <h4>{price}</h4>
        <div className='game-card__lower-section--horizontal'>
          <p>{console}</p>
          <FontAwesomeIcon icon={faHeart}/>
        </div>
      </div>
    </div>
  )
}

export default GameCard
