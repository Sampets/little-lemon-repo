import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
        <Link to="/" className="nav-item sectiontitle">Home</Link>
        <Link to="/" className="nav-item sectiontitle">About</Link>
        <Link to="/" className="nav-item sectiontitle">Menu</Link>
        <Link to="/booking" className="nav-item sectiontitle">Reservations</Link>
        <Link to="/" className="nav-item sectiontitle">Order Online</Link>
        <Link to="/" className="nav-item sectiontitle">Login</Link>
    </nav>
  )
}

export default Nav