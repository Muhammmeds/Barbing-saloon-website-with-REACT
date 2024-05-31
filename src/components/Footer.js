import React from 'react'
import './Footer.css'
import { FaInstagram,FaFacebook,FaTwitter,FaPhoneAlt,FaLocationArrow } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer'>
        <div className="contact">
            <p>Contact  Us</p>
            <ul>
                <li><FaFacebook className='icon' /><span>Facebook</span></li>
                <li><FaInstagram className='icon' /><span>Instagram</span></li>
                <li><FaTwitter className='icon' /><span>Twitter</span></li>
                <li><FaPhoneAlt className='icon'/><span>Phone number</span></li>
            </ul>
        </div>
        <div className="address">
                <p className='firstp'>Address<FaLocationArrow className='icon2'/></p>
                <p className='addressdetails'>96 Earls Avenue, <br />
                    Whitefield,<br />
                    AB51 6DA, <br />
                    United Kingdom.</p>
        </div>
        <div className="copyright">
            <p>copyright</p>
            <p>C. 2018-2019|All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer