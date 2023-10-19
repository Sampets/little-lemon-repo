import React, { useState } from 'react'

function BookingForm({availableTimes, dispatch, submitForm}) {

    var newDate = new Date()
    const [formData, setFormData] = useState({
        fullName: '',
        date: {newDate},
        time: '',
        guests: '',
        occasion: ''
    })

    //the array should be availableTimes
    const timesOptions = ['17:00','18:30','19:00','20:00','21:30'].map(time => <option key={time}>{time}</option>)

    const handleSubmit =(e) => {
        e.preventDefault()
        submitForm(formData)
    }

    const handleFormChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFormChangeDate = (e) => {
        const val = e.target.value
        setFormData((prev) => ({
            ...prev,
            date: val
        }))
        dispatch({type: 'UPDATE', value: new Date(val)})
    }

    var today = new Date().toISOString().split('T')[0]; //to not allow days before today to be selected
    return (
        <div className='form-box'>
            <div className='form-title subtitle'>Book a table by filling in the details below.</div>
            <form onSubmit={handleSubmit}>
                <div className='form-area'>
                    <div className='form-col'>
                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" placeholder="Enter your full name" id="full-name" value={formData.fullName} onChange={handleFormChange} name='fullName' required/>
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" id="res-date" value={formData.date} onChange={handleFormChangeDate} name='date' min={today} required/>
                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time" value={formData.time} onChange={handleFormChange} name='time' required>
                            {timesOptions}
                        </select>
                    </div>
                    <div className='form-col'>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" placeholder="Choose 1-10" min="1" max="10" id="guests" value={formData.guests} onChange={handleFormChange} name='guests' required/>
                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={formData.occasion} onChange={handleFormChange} name='occasion' required>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        <input className='btn' type="submit" value="Book Table Now"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BookingForm