import { depositFunds } from '../api/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Deposit = () => {
  const [ammount, setAmmount] = useState('')
  const navigate = useNavigate()

  const handleDeposit = async() => {
    const id = localStorage.getItem('userId')
    const dep = await depositFunds(id, ammount)

    navigate('/account')

  }
  return (
    <div className='operation-container'>
      <h3>Deposit</h3>
      <div className='operation-form'>
        <input placeholder='Quantity' value={ammount} onChange={(e) => setAmmount(e.target.value)}/>
        <button onClick={handleDeposit}>Deposit</button>
      </div>
      
    </div>
  )
}

export default Deposit