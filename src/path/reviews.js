import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './reviews.css'

function Reviews() {
    const [name,setName] = useState();
    const [comment,setComment] = useState();
    const [rating,setRating] = useState('5');
    const [noreview,setNoReview] = useState(true);
    const [addReview , setAddReview] = useState(true);
    const [input,setInput] = useState(false)
    const [array,setArray] = useState([])
    const [error,setError] = useState(false)

    const Input = () => {
        setAddReview(false)
        setInput(true)
    }

    const AddReview = (e) =>{
      e.preventDefault();
      if(name===undefined|| comment===undefined || rating===undefined){
        setError(true)
      }else{
      const newReview = { name, comment,rating };
      setArray([...array, newReview]);
      setAddReview(true)
      setNoReview(false)
      setInput(false)
    }
    }
  

  return (
    <>
    <Header/>
    <div className='box'>
        {array && array.map((data,index)=>(
          <div className='box2' key={index}>
            <ul>
              <li>Name:{data.name}</li>
              <li>Comment:{data.comment}</li>
              <li>Rating:{data.rating}</li>
            </ul>
          </div>
        ))}
        {noreview && <p>No Reviews Yet....</p>}
        {addReview && <button className='addButton' onClick={Input} >Add a Review</button>}
        {input && <form>
        <label>Name:</label> <br />
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='name' /> <br />
        <label>Comment:</label> <br />
        <input type="text" value={comment} onChange={(e)=>{setComment(e.target.value)}} placeholder='comment' /> <br />
        <label>Rating:</label>
        <select value={rating} onChange={(e)=>{setRating(e.target.value)}}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option selected value="5">5</option>
        </select> <br />
        {error && <p className='error'>All inputs fields are required!!!</p>}
        <button onClick={AddReview} className='addReview'>Add Review</button>
        </form>}
        
    </div>
    <Footer />
    </>
  )
}

export default Reviews