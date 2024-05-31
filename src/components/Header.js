import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
        <nav>
            <p>Noble Saloon</p>
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to ='/prices'>Prices</Link></li>
                <li><Link to ='/reviews'>Reviews</Link></li>
                <li><Link to ='/about'>About</Link></li>
                
            </ul>
        </nav>
    </>
  )
}

export default Header