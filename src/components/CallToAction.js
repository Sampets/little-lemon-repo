import React from 'react'
import { Link } from 'react-router-dom'
import restaurant from '../assets/restaurant.jpg'

function CallToAction() {
  return (
    <div className='jumbo'>
      <div className='jumbo-col'>
        <div className='jumbo-title title'>Little Lemon</div>
        <div className='jumbo-subtitle subtitle'>Chicago</div>
        <div className='jumbo-description leadtext'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</div>
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