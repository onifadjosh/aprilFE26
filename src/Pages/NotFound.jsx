import React from 'react'

const NotFound = () => {
  return (
    <div className='d-flex flex-column gap-4 justify-content-center align-items-center' style={{height:"100vh"}}>
        <h1>Sorry, we couldn't find the page you are looking for🙈</h1>

        <button className='btn btn-dark'>Run to Safety</button>
    </div>
  )
}

export default NotFound