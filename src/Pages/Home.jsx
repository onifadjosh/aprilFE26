import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCount, increaseCountBy } from '../redux/appSlice'

const Home = () => {
  const count = useSelector((state)=>state.count)
  const [num, setnum] = useState(0)

  const dispatch = useDispatch()
  return (
    <div>This is my home page   {count}
    
    
      <br />

      <button className='btn btn-success' onClick={()=>dispatch(increaseCount())}>+</button>

        <input type="number" onChange={(e)=>setnum(e.target.value)}/>

      <button className='btn btn-success' onClick={()=>dispatch(increaseCountBy(Number(num)))}>+{num}</button>
    </div>
  )
}

export default Home