import React from 'react'
import './gamePanel.css'
import GameSlider from '../gameSlider/GameSlider'
import Rating from '../rating/Rating'
import Button from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const GamePanel = () => {
  return (
    <div className='game-panel'>
      <div className='game-panel__left'>
        <div className='game-panel__path'>
          <p>Store</p>
          <p> {'>'} Games</p>
          <p> {'>'} Spellforce</p>
        </div>
        <GameSlider/>
        <Rating/>
      </div>
      <div className='game-panel__right'>
        <p className='game-panel__console-name'>Game Switch</p>
        <h2>Spellforce</h2>
        <div className='game-panel__price'>
          <h2>$14.99</h2>
          <FontAwesomeIcon className="heart-icon" icon={faHeart}/>
        </div>
        <p>Eligible for up to <span className='bolder colored'>75</span> Gold Coins</p>
        <Button text={'Direct download'}/>
        <p>This item will be sent to your system automatically after purchase.</p>
      </div>
    </div>
  )
}

export default GamePanel
