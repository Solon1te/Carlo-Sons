import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './HeaderNav.css'
import trees from './../../assets/trees-xb.png'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdOutlineGrass} from 'react-icons/md' 
import {SiJohndeere} from 'react-icons/si'
import { useRef } from 'react'


const HeaderNav = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }
  return (
    
    <header className='nav-bar'>
      <img src={trees} alt="small-logo" className='logo-small' />
      <h3 className='carlo-sons-text'>Carlo & Sons</h3>
        <nav ref={navRef} className='nav-bar-list'>
            <a href="#Services" onClick={showNavBar}><MdOutlineGrass className='icon'/>SERVICES</a>
            <a href="#About" onClick={showNavBar}><SiJohndeere className='icon'/>ABOUT US</a>
            <a href="#Contact" onClick={showNavBar}><FaPhoneAlt className='icon'/>CONTACT</a>
            <button className='nav-btn nav-close-btn' onClick={showNavBar}>
              <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavBar}>
          <FaBars/>
        </button>
    </header>
  )
}

export default HeaderNav