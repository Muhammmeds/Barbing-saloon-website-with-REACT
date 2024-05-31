import React, { useState } from 'react'
import './booking.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';


function Booking() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [age,setAge] = useState('')
  const [option,setOption] = useState('fade')
  const [date,setDate] = useState('')
  const [err,setError] = useState(false)
  const navigate = useNavigate();


  const sendForm = (e) =>{
    e.preventDefault();
    console.log(name,email,age,option,date)
    if(name===''||email===''||age===''||option===''||date===''){
      setError(true);
    }else{
      console.log('good')
      navigate('/confirmbooking');
    }
  }
  return (
    <>
    <Header/>
    <div className="booking">
      <p>Book a Cut</p>
      <form>
        <label>Name:</label><br />
        <input onChange={(e)=>{setName(e.target.value)}} type='text'/><br />
        <label>Email:</label><br />
        <input onChange={(e)=>{setEmail(e.target.value)}} type='text' /><br />
        <label>Age:</label><br />
        <input onChange={(e)=>{setAge(e.target.value)}} type='number' /><br />
        <label className='haircut'>Haircut style:</label>
        <select onChange={(e)=>{setOption(e.target.value)}}>
          <option value="lowcut">Low cut</option>
          <option value="fade">fade</option>
          <option value="lowfade">Low fade</option>
          <option value="Braids">Braids</option>
          <option value="Box Braid">Box Braid</option>
        </select> <br />
        <label>Date:</label>
        <input type='date' onChange={(e)=>{setDate(e.target.value)}} /> <br />
        <button onClick={sendForm}>Book service</button>
        {err && <p className='error'>All fields are compulsory!!</p>}
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default Booking