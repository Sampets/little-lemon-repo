import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
        <Link to="/" className="sectiontitle">Home</Link>
        <Link to="/" className="sectiontitle">About</Link>
        <Link to="/" className="sectiontitle">Menu</Link>
        <Link to="/booking" className="sectiontitle">Reservations</Link>
        <Link to="/" className="sectiontitle">Order Online</Link>
        <Link to="/" className="sectiontitle">Login</Link>
    </nav>
  )
}

export default Nav