import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

function Login() {
  useEffect(() => {
    if (localStorage.getItem('user-key'))
      navigate('/add');
  }, []);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  async function login() {
    let items = { user, password }
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    //result = await result.json();
    localStorage.setItem('user-key', JSON.stringify(user))
      navigate('/add');
  }
  return (
    <>
      <Header />

      <div>
        <div className='col-sm-6 offset-sm-3'>
          <h1>Login</h1>
          <input type="email" className='form-control' value={user} onChange={(e) => setUser(e.target.value)} placeholder='Email'></input>
          <br />
          <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' ></input>
          <br />
          <button onClick={login} className='form-control btn btn-primary'>Login</button>
        </div>

      </div>
    </>
  )
}

export default Login
