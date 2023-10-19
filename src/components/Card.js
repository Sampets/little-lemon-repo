import React from 'react'

function Card({ img, name, number, descr }) {
  return (
    <div className='card'>
        <img className='card-img' src={img} alt="Greek Salad Dish" />
        <div className='card-toprow'>
            <div className='card-name cardtitle'>{name}</div>
            <div className='card-number highlighttext'>{number}</div>
        </div>
        <div className='card-midrow paragraphtext'>{descr}</div>
    </div>
  )
}

export default Card
