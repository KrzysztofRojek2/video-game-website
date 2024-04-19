import React from 'react'
import './textWithIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TextWithIcon = ({text, icon, onClick}) => {
  return (
    <div className='text-with-icon' onClick={onClick}>
      <FontAwesomeIcon className="icon" icon={icon} />
      {text}
    </div>
  )
}

export default TextWithIcon
