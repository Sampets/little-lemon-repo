import React, { useState, useReducer } from 'react'
import BookingForm from '../components/BookingForm'
import {fetchAPI ,submitAPI} from "../api.js"
import { useNavigate } from 'react-router-dom'

function BookingPage() {

  const navigate = useNavigate();

  function submitForm(formData){
    if (submitAPI(formData)){
      navigate("/booking-confirmed")
    }
  }


  function updateTimes(availableTimes, action){
    if (action.type === 'UPDATE')
      availableTimes = fetchAPI(action.value)
    return availableTimes
  }

  function initializeTimes() {
    return fetchAPI(new Date())
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}></BookingForm>
    </div>
  )
}

export default BookingPage