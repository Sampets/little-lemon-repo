import React from 'react'

function Card({ img, name, number, descr }) {
  return (
    <div className='card'>
        <img className='card-img' src={img} alt="Greek Salad Dish" />
        <div className='card-toprow'>
            <div className='card-name'>{name}</div>
            <div className='card-number'>{number}</div>
        </div>
        <div className='card-midrow'>{descr}</div>
    </div>
  )
}

export default Card
