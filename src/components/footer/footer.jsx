import React from 'react'
import './footer.css'
import trees from './../../assets/trees-xb-green.png'
const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
        <img className='mini-logo' src={trees} alt="" />

      <div className="footer__socials">
        <a href="https://Linkedin.com"></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Carlo & Sons all rights reserved.</small>
        <small>Page created by Mark Dietrich.</small>
      </div>
    </footer>
  )
}

export default Footer