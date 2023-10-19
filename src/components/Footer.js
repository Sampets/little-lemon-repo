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
        <a href="/">About</a>
        <a href="/">Menu</a>
        <Link to="/booking">Reservations</Link>
        <a href="/" >Order Online</a>
        <a href="/">Login</a>
      </div>
      <div className='footer-col'>
        <div className='footer-title sectiontitle'>Contact us</div>
        <a href="/">Chicago Str.</a>
        <a href="/">467-555-9685</a>
        <a href="/">contact@example.com</a>
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