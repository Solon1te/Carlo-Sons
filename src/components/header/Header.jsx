import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo-xb.png'
import HeaderNav from '../HeaderNav/HeaderNav'


const Header = () => {
  return (
    <header>
      <HeaderNav/>
        <div className="header-image"> 
          <a href="#Header">
          <img className='logo-img' src={Logo} alt="Carlo-&-Sons-Logo" />
          </a>
          <div className="btn-container">
            <a href="tel:" className='btn'>Call Us</a>
          </div>
        </div>          
    </header>
  )
}

export default Header