import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {

  const [inputData, setInputData] = useState({name:'', email:''})
  
  const navigat = useNavigate()

  function handleSubmit(event) {
    event.preventDefault() 

    axios.post('https://jsonplaceholder.typicode.com/users', inputData)
    .then(res => {
      alert("Data Added Successfully!")
      navigat('/')
    }).catch(err => console.log(err))
  }

  return (

    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-light p-5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type="text" name='name' className='form-control' onClick={e => setInputData({...inputData, name: e.target.value})} />
          </div>  

          <div>
            <label htmlFor='email'>Email:</label>
            <input type="email" name='email' className='form-control' onClick={e => setInputData({...inputData, email: e.target.value})} />
          </div><br />
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Add