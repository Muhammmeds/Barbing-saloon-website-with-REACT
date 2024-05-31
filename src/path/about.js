import React from 'react'
import './about.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <>
    <Header/>
    <div className='about'>
        <p>About Us</p>
        <p>Having quickly become the go to destination for men’s grooming in an area where discerning folk abound and where many of them call home,<br /> Old School Barbers offers the very best haircuts with traditional, no fuss, expertise and a thoroughly welcoming atmosphere. <br />

    If you are looking for the quintessential barber experience, with refreshments included, a relaxed atmosphere and razor sharp cut, then swing by soon.</p>
    </div>
    <Footer/>
    </>
  )
}

export default About;