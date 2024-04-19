import React from 'react'
import './suggestions.css'
import SuggestionsSlider from '../../components/suggestionsSlider/SuggestionsSlider'

const Suggestions = () => {
  return (
    <div className='suggestions section-padding'>
      <h2 className='suggestions__header'>More like this</h2>
      <SuggestionsSlider/>

      <div className='suggestion__rights-reserved-info'>
        <p>Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. nintendo.com/switch-online</p>
        <p>Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Suggestions
