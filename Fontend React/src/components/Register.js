import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header';

function Register() {
  useEffect(()=>{
    navigate('/add');
  },[]);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] =useState("");
  const navigate = useNavigate();
  async function signUp(){
    let items = {name,email,password}
    let result = await fetch("http://127.0.0.1:8000/api/users", {
        method: 'POST',
        body: JSON.stringify(items),
        headers: {
          'Content-Type' : 'application/json',
          'Accept': 'application/json'
        }
      });
      
      localStorage.setItem('user-key', JSON.stringify(email))
      navigate('/add');
  }
  return (
    <>
    <Header/>
    <div className='col-sm-6 offset-sm-3'>
      <h2>Registration Form</h2>
      <input type='text' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Full Name'></input>
      <br/> 
      <input type='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Email'></input>
      <br/> 
      <input type='password' className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>  
      <br/>
      <button type='submit' onClick={signUp} className='form-control btn btn-primary'> Sign Up </button>   
    </div>
    </>
  )
}

export default Register