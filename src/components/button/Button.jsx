import React from 'react'
import './button.css'

const Button = ({text}) => {
  return (
    <button className='btn pulsate-fwd'>
      <p>{text}</p>
    </button>
  )
}

export default Button
