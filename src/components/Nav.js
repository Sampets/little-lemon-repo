import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
        <Link to="/" className="nav-item">Home</Link>
        <a href="/">About</a>
        <a href="/">Menu</a>
        <Link to="/booking" className="nav-item">Reservations</Link>
        <a href="/">Order Online</a>
        <a href="/">Login</a>
    </nav>
  )
}

export default Nav