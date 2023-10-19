import React from 'react'
import brothers from '../assets/Mario and Adrian A.jpg'

function Chicago() {
  return (
    <div className='jumbo chicago'>
      <div className='jumbo-col chicago'>
        <div className='jumbo-title title chicago-title'>Mario and Adrian</div>
        <div className='jumbo-subtitle subtitle'>Cooking is their passion</div>
        <div className='jumbo-description leadtext'>Mario and Adrian, two brothers, run Little Lemon. They are passionate about cooking and have been working together for years. Their restaurant is known for its delicious food and warm atmosphere, which keeps customers coming back for more.</div>
      </div>
      <div className='jumbo-col'>
        <img className='jumbo-img' src={brothers} alt="Brothers Mario and Andrian cooking" />
      </div>
    </div>
  )
}

export default Chicago