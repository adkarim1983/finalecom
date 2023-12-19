import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logoelg.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>EleganceEmpire</p>
      </div>
      <ul className="footer-links">
        
        <li>Nos Produits</li>
        <li>Adresse </li>
        <li>A Propos</li>
        <li>Nous Contacter</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2023, EleganceEmpire.com, Tous les droits sont réservés..</p>
      </div>
    </div>
  )
}

export default Footer
//  <Link style={{ textDecoration: 'none' }} to='/nous-contacter'>Nous Contacter</Link>