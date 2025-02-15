import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Homepage from '../pages/Homepage';
import BookingPage from '../pages/BookingPage';
import ConfirmedBooking from '../pages/ConfirmedBooking';

function Main() {
  return (
    <main>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
        </Routes>
    </main>
  )
}

export default Main