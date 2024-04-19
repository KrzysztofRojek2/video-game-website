import React from 'react'
import './specification.css'
import TextWithIcon from '../textWithIcon/TextWithIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';

const Specification = ({text, icon, textForIcon}) => {
  return (
    <div className='specification'>
      <div className='specification__icon'>
        <TextWithIcon icon={icon} text={textForIcon}/>
      </div>
      <div className='specification__text'>
        {text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  )
}

export default Specification
