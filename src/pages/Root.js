import React from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const Root = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className='home-body'>
      <Header />

      <Outlet />

    </div>
    
  )
}

export default Root