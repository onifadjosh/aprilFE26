import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const count = useSelector((state)=>state.count)
  return (
    <div>Dashboard  {count}</div>
  )
}

export default Dashboard