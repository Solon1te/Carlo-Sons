import './about.css'
import Yard from './../../assets/Yard.jpg'
import Yard2 from './../../assets/Yard2.jpg'
import Yard3 from './../../assets/Yard3.jpg'
import Yard4 from './../../assets/Yard4.jpg'
import Yard5 from './../../assets/Yard5.jpg'
import Yard6 from './../../assets/Yard6.jpg'


import React from 'react'

const about = () => {
  return (
    <div id='About' className='grid-container container'>
        <div className="about-us">
        <h1 className='Title'>About us</h1>
        <p>Carlo & Sons is a family-owned landscaping company based in the heart of 
          Westbrook, CT. We take pride in providing top-quality landscaping services
          to our local community. From lawn maintenance to general handyman work, we offer a wide range of services that are tailored to 
          meet your unique needs. We are committed to delivering exceptional results 
          and providing our clients with personalized attention and excellent 
          customer service. Contact us today to schedule a consultation and let us 
          help you bring your outdoor vision to life!"
        </p>
        </div>
        <img className='card yard1' src={Yard} alt="Yard" />
        <img className='card yard2' src={Yard2} alt="Yard" />
        <img className='card yard3' src={Yard3} alt="Yard" />
        <img className='card yard4' src={Yard4} alt="Yard" />
        <img className="card yard5" src={Yard5} alt="Yard"  />
        <img className='card yard6' src={Yard6} alt="Yard" />

    </div>
  )
}

export default about