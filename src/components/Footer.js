import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='footer-img'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='footer-col'>
        <div className='footer-title sectiontitle'>Pages</div>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Menu</Link>
        <Link to="/booking">Reservations</Link>
        <Link to="/">Order Online</Link>
        <Link to="/">Login</Link>
      </div>
      <div className='footer-col'>
        <div className='footer-title sectiontitle'>Contact us</div>
        <div className='footer-info'>Chicago Str.</div>
        <div className='footer-info'>467-555-9685</div>
        <a href='mailto:contact@example.com'>contact@example.com</a>
      </div>
      <div className='footer-col'>
        <div className='footer-title sectiontitle'>Our Social Media</div>
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.instagram.com">Instagram</a>
        <a href="https://www.x.com" >X (Twitter)</a>
      </div>
    </footer>
  )
}

export default Footer