import React from 'react'
import { Link } from 'react-router-dom'
import restaurant from '../assets/restaurant.jpg'

function CallToAction() {
  return (
    <div className='jumbo'>
      <div className='jumbo-col'>
        <div className='jumbo-title title'>Little Lemon</div>
        <div className='jumbo-subtitle subtitle'>Chicago</div>
        <div className='jumbo-description paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <Link to="/booking">
          <button className='btn'>Reserve a table</button>
        </Link>
      </div>
      <div className='jumbo-col'>
        <img className='jumbo-img' src={restaurant} alt="Restaurant" />
      </div>
    </div>
  )
}

export default CallToAction