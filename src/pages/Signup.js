import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const handleSignup = async (event) => {
    event.preventDefault();
    
    const payload = {username, email, password}
    console.log("Signing up with:", {payload});

    try {
      const response = await fetch('http://localhost:8000/auth/signup',
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
        navigate('/login')
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='login-container'>
      <h2>Signup</h2>
      <form className='login-form' onSubmit={e => handleSignup(e)}>
          <input required type='text' id='username' className='login-input' placeholder='Username' value ={username} onChange={e => setUsername(e.target.value)}/>
          <input required type='email' id='email' className='login-input' placeholder='Email' value ={email} onChange={e => setEmail(e.target.value)}/>
          <input required type='password' id="password" className='login-input' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button className='login-button' >Signup</button>
      </form>
    </div>
  )
}

export default Signup