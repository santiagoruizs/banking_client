import React from 'react'
import { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (event) => {
    
    event.preventDefault();
    
    const payload = {username, password}
    console.log("Logging in with:", {payload});

    try {
      const response = await fetch('http://localhost:8000/auth/login',
        {
          method : 'POST',
          headers : {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        })
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Response data:', data);

        // props.setLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data.id);
        navigate('/account')

    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={e => handleLogin(e)}>
          <input required type='text' id='username' className='login-input' placeholder='Username' value ={username} onChange={e => setUsername(e.target.value)}/>
          <input required type='password' id="password" className='login-input' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button className='login-button' >LogIn</button>
        </form>
        <p>Dont have an account yet? <a href='/signup'>SignUp</a></p>
    </div>
  )
}

export default Login