import React from 'react'
import './advertising.css'
import Button from '../../components/button/Button'
const Advertising = () => {
  return (
    <div className='advertising__section section-padding'>
      <div className='advertising'>
        <div className='advertising__text'>
          <h3>Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership.</h3>
          <p>This game supports: <span className='bolder colored underlined'>Online Play</span> <span className='bolder colored underlined'>Cloud Saves</span></p>
          <Button text={'Learn more'}/>
        </div>
        <div className='advertising__image'>
          <img src="src/assets/gamer-hand-holding-joystick-game-controller-pad-png.png" alt="sth" />
        </div>
      </div>
      
    </div>
  )
}

export default Advertising
