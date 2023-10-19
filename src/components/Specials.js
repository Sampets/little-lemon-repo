import React from 'react'

import greeksalad from '../assets/greek salad.jpg'
import bruschetta from '../assets/bruchetta.svg'
import lemondessert from '../assets/lemon dessert.jpg'
import Card from './Card'

function Specials() {
  return (
    <div className='specials-cont'>
      <div className='specials-header'>
        <div className='specials-subtitle subtitle'>Specials</div>
        <button className='btn'>Online Menu</button>
      </div>

      <div className='cards'>
        <Card img={greeksalad} name="Greek Salad" number="$12.99" descr="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."></Card>
        <Card img={bruschetta} name="Bruschetta" number="$5.99" descr="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."></Card>
        <Card img={lemondessert} name="Lemon Dessert" number="$5.00" descr="This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined."></Card>
      </div>
    </div>
  )
}

export default Specials