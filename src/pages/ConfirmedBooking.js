import React from 'react'
import { Link } from 'react-router-dom'

function ConfirmedBooking() {
  return (
    <div className='confirmed'>
        <div className='confirmed-title title'>Booking Confirmed!</div>
        <div className='confirmed-subtitle subtitle'>Just say your name at your arrival and you will be guided to your table.</div>
        <div className='confirmed-links'>
          <Link to="/" className="confirmed-link-home">Go back to the Homepage</Link>
          <span>or</span>
          <Link to="/booking" className="confirmed-link-back">Make a new reservation</Link>
        </div>
    </div>
  )
}

export default ConfirmedBooking