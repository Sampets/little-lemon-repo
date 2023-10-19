import React from 'react'
import person1 from '../assets/pexels-george-dolgikh-1310474.jpg'
import person2 from '../assets/pexels-andrea-piacquadio-762020.jpg'
import person3 from '../assets/pexels-adrienn-1542085.jpg'
import person4 from '../assets/pexels-christina-morillo-1181690.jpg'
import Card from './Card'

function CustomersSay() {
  return (
    <div className='customers-cont'>
      <div className='customers-title subtitle'>
        Testimonials
      </div>

      <div className='cards'>
        <Card img={person1} name="Sophia" number="5/5" descr="This restaurant is a hidden gem! The food is amazing and the service is top-notch."></Card>
        <Card img={person2} name="Maria" number="5/5" descr="I was blown away by the quality of the food. It was fresh, flavorful, and beautifully presented."></Card>
        <Card img={person3} name="Artemis" number="5/5" descr="I haveve been to this restaurant several times and I am never disappointed."></Card>
        <Card img={person4} name="Irene" number="5/5" descr="The food was delicious and the service was impeccable.My guests were raving about it all night!"></Card>

      </div>
    </div>
  )
}

export default CustomersSay