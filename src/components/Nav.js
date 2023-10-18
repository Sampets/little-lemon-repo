import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Homepage from '../pages/Homepage';
import BookingPage from '../pages/BookingPage';


function Nav() {
  return (
    <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
    </Routes>

  )
}

export default Nav