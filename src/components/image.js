import React from 'react'
import image from '../barb.jpg'
import './image.css'
import {Link} from 'react-router-dom'

function Image() {
  return (
    <div className='container'>
        <img src={image} alt="barb" />
        <p>GET A FRESH CUT...</p>
        <button><Link to= '/booking'>Book A Haircut</Link></button>
    </div>
  )
}

export default Image;