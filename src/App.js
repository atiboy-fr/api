import React, { useEffect, useState } from "react";
import axios from "axios";
// import data from './db.json'
import { Link, useNavigate } from 'react-router-dom'


function App() {
  const [columns,  setColumns] = useState([])
  const [records, setRecords] = useState([])
  const navigate =  useNavigate()
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setColumns(Object.keys(res.data[0]))
      setRecords(res.data)
    })
  }, [])


  return (
    <div className="container mt-5">
      <div className="text-end">
        <Link to="/create" className="btn btn-primary">Add +</Link>
      </div>
      <table className="table">
        <thread>
          <tr>
          {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thread>
        <tbody>
          {
            records.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.username}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.address.street}</td>
                <td>{d.phone}</td>
                <td>{d.website}</td>
                <td>{d.company.name}</td>
                <td>
                  <Link to={`/update/${d.id}`} className="btn btn-sm btn-success">Update</Link>
                  <button onClick={e => handleSubmit(d.id)} className="btn btn-sm ms-1 btn-danger">Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
  function handleSubmit(id) {
    const conf =  window.confirm("Do you want to delete")
    if(conf) {
       axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
       .then(res => {
        alert('record has deleted')
        navigate('/')
       }).catch(err => console.log(err))
    }
  }
}

export default App;
