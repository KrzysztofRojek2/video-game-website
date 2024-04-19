import React from 'react'
import './rating.css'

const Rating = () => {
  return (
    <div className='rating'>
      <div className='rating__img'>
        <img src="src\assets\rating-e-10.png" alt="rating-e-10+" />
      </div>
      <div className='rating__text'>
        <p>Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood</p>
        <hr />
        <p>Users interact</p>
      </div>
    </div>
  )
}

export default Rating
