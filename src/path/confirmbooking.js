import React from 'react'
import './confirmbooking.css'
import Header from '../components/Header';
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


function Confirmbooking() {
  return (
    <>
    <Header/>
    <div className='confirmation'>
        <p className='icon'>{<AiOutlineCheck/>}</p>
        <p className='email'>A Confirmation message has been sent to you,<br /> check your Email</p>

        <Link to='/'><button>Go Home</button></Link>
    </div>
    <Footer/>
    </>
  )
}

export default Confirmbooking;