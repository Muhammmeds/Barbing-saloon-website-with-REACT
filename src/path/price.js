import React from 'react'
import './price.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Price() {
  return (
    <>
    <Header/>
    <div className='price'>
        <p>Prices</p>
    <ul>
        <li>SHORT BACK & SIDES  -  £ 16 </li>
        <li>SCISSOR CUT  -  £ 16.50</li>
        <li>GUARD ALL OVER  -  £ 9.50</li>
        <li>2 GUARDS  -  £ 10.50</li>
        <li>BACK & SIDES  -  £ 12</li>
        <li>LONG HAIR TRIM  -  £19</li>
        <li>RE-STYLE  -  £ 20</li>
       <li> ZERO FADE  -  £ 18</li>
        <li>ZERO FADE, BACK & SIDES  -  £ 15</li>  
        <li>FLAT TOP  -  £ 17</li>
        <li>BEARD TRIM  -  £ 7.50</li>
        <li>HAIR WASH  -  £ 6</li>
        <li>SKIN FADE (FOIL SHAVER)  -  £ 22</li> 
    </ul>
        </div>
    <Footer/>
    </>
  )
}

export default Price