import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const {id} = useParams()
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },)

  function handleSubmit(event) {
    event.preventDefault()
    axios.put('https://jsonplaceholder.typicode.com/users/'+id, data)
    .then(res => {
      alert("data update successfully!")
      navigate('/')
    })
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-light p-5'>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor='name'>ID:</label>
          <input type="text" disabled value={data.id} name='name' className='form-control' onChange={e => setData({...data, name: e.target.value})} />
        </div> 

        <div>
          <label htmlFor='name'>Name:</label>
          <input type="text" value={data.name} name='name' className='form-control' onChange={e => setData({...data, name: e.target.value})} />
        </div>  

        <div>
          <label htmlFor='email'>Email:</label>
          <input type="email" value={data.email} name='email' className='form-control' onChange={e => setData({...data, email: e.target.value})} />
        </div><br />
        <button className='btn btn-info'>Update</button>
      </form>
    </div>
  </div>
  )
}

export default Edit