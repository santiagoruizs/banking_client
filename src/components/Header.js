
import {useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

const Header = (props) => {

  const navigate = useNavigate()

  const handleLogOut = () => {
    
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      localStorage.removeItem('userId');

    navigate('/login')
  }

  return (
    <div className='header-container'>
        {/* <div className='header-element'>
            <p>MENU</p>
        </div> */}
        <div className='header-element logo' onClick={() => navigate('/account')}>
            <p>BANKING APP</p>
        </div>
        <div className='header-element logo' onClick={handleLogOut}>
          <p>LOGOUT</p>

        </div>

    </div>
  )
}

export default Header