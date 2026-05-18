import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='d-flex '>
        <div className='sidebar bg-dark d-flex flex-column' style={{height:"100vh", width:"20%"}}>
            <Link className='text-white text-decoration-none' to={"/layout/dashboard"}>Dashboard</Link>
            <Link className='text-white text-decoration-none' to={"/employee"}>Employee</Link>
        </div>
        <div className='children' style={{width:"80%"}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout