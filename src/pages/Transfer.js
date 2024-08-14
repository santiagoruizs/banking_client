import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { transferFunds } from '../api/api'

const Transfer = () => {
  const [ammount, setAmmount] = useState('')
  const [toAccount, setToAccount] = useState('')
  const navigate = useNavigate()

  const handleTransfer = async() => {
    const id = localStorage.getItem('userId')
    const dep = await transferFunds(id, toAccount ,ammount)
    navigate('/account')

  }

  return (
    <div className='operation-container'>
      <h3>Transfer</h3>
      <div className='operation-form'>
        <input placeholder='Account' value={toAccount} onChange={(e) => setToAccount(e.target.value)}/>
        <input placeholder='Quantity' value={ammount} onChange={(e) => setAmmount(e.target.value)}/>
        <button onClick={handleTransfer}>Transfer</button>
      </div>
      
    </div>
  )
}

export default Transfer