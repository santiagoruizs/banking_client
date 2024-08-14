import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import { getAccount } from '../api/api'
import addicon from '../icons/add.png'
import arrowIcon from '../icons/next.png'
import minusIcon from '../icons/minus.png'
import CountUp from 'react-countup'

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [account, setAccount] = useState({})

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true'){
      const getAccountInfo = async () => {
        const id = localStorage.getItem('userId')
        const data = await getAccount(id)
        console.log(data);
        setAccount(data)
      }
      setLoggedIn(true)
      setUsername(localStorage.getItem('username'))
      getAccountInfo()
    }else{
      navigate('/login')
    }

  }, [location])

  return (
    <div className='home-container'>
      <h2>Welcome back {username}</h2>
      <div className='account-card'>
        <h3>Main Account</h3>
        <h2>
        <CountUp 
            end={account.balance} 
            decimal='.' 
            decimals={2} 
            prefix="$"
            duration={1}
        />
        </h2>
        {/* <h2>Balance: $ {account.balance}</h2> */}
      </div>
      
      <div className='nav-buttons-container'>
        <div className='btn-container'>
          <img src={addicon} alt='deposit' className='nav-button deposit' onClick={() => navigate('/account/deposit')}/> 
          <p>Deposit</p>
        </div>
        <div className='btn-container'>
        <img src={minusIcon} alt='widthdraw' className='nav-button withdraw' onClick={() => navigate('/account/widthdraw')}/>  
        <p>Widthdraw</p>
        </div>
        <div className='btn-container'>
          <img src={arrowIcon} alt='transfer' className='nav-button transfer' onClick={() => navigate('/account/transfer')}/>   
          <p>Transfer</p>
        </div>
        
      </div>
      
      <Outlet />
    </div>
  )
}

export default Home