import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'  // Import Link for React Router navigation

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="Logo" className='logo'/>
               <p>Explore a wide variety of restaurants, enjoy special offers, and participate in our loyalty program for exclusive rewards. Discover what makes us the best choice for your food cravings.</p>
               <div className="footer-social-item">
                <img src={assets.twitter_icon} alt="Twitter" />
                <img src={assets.facebook_icon} alt="Facebook" />
                <img src={assets.linkedin_icon} alt="LinkedIn" />
               </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About us</Link></li>
                    <li><Link to="/myorders">Delivery</Link></li>
                    <li><Link to="/privacy-policy">Privacy policy</Link></li>
                 </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-8174934125</li>
                    <li>contact@food.com</li>
                </ul>
            </div>
        </div>
         <hr />
         <p className='footer-copyright'>copyright (©) 2025-26 @ food.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
