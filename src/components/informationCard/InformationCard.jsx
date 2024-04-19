import React from 'react'
import './informationCard.css'
import Rating from '../rating/Rating'

const InformationCard = () => {
  return (
    <div className='information-card'>
      <h3>ESRB rating</h3>
      <Rating />
    </div>
  )
}

export default InformationCard
