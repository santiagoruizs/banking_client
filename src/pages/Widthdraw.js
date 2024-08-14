import { widthdrawFunds } from '../api/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Widthdraw = () => {
  const [ammount, setAmmount] = useState('')
  const navigate = useNavigate()

  const handleWidthdrawFunds = async() => {
    const id = localStorage.getItem('userId')
    const dep = await widthdrawFunds(id, ammount)
    navigate('/account')
  }

  return (
    <div className='operation-container'>
      <h3>Widthdraw</h3>
      <div className='operation-form'>
        <input placeholder='Quantity' value={ammount} onChange={(e) => setAmmount(e.target.value)}/>
        <button onClick={handleWidthdrawFunds}>Widthdraw</button>
      </div>
       
    </div>
  )
}

export default Widthdraw