import React from 'react'
import { useState } from 'react'

const Form = ()=>{
  const[data,setData] = useState({name:"",rating:"",message:""})
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data,[name]:value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data);
  }
  return (
    <form method='post' onSubmit={handleSubmit}>
        <h1>Feedback <span>Service</span></h1>
        <input type = "text" name ="name" id="" onChange={handleChange} value={data.name} placeholder='Enter Customer Name'/><br></br>
        <input type = "text" name ="rating" id="" onChange={handleChange} value={data.rating} placeholder='Rating'/><br></br>
        {/* <input type = "text" name ="Review message" id=""placeholder='Enter review message'/><br></br> */}
        <textarea name = "message" id="" cols="38"rows="10" onChange={handleChange} value={data.message} placeholder="Enter Review Message"></textarea><br></br>
        <button type='submit'>Send</button>
        <p>{data.name},{data.rating},{data.message}</p>
    </form>
  )
}
export default Form