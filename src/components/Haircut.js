import React from 'react'
import './Haircut.css'
import data from '../data'

function Haircut() {
  return (
    <>
    <div className='haircutcontainer'>
        <p>Our Haircuts</p>
    </div>
  
        {data.map((data)=>(
          <div key={data.id} className="box1">
            <img src={data.image} alt="pic" />
            <div className='inside'>
            <p>{data.title}</p>
            <p>Price:<span>{data.price}</span></p>
            </div>
          </div>
        ))}
      
    </>
  )
}

export default Haircut