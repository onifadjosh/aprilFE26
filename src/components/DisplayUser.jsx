import React, { useState } from 'react'

const DisplayUser = ({allUsers, deleteUser, editUser}) => {
      const [firstName, setfirstName] = useState("")
          const [lastName, setlastName] = useState("")
          const [email, setemail] = useState("")
          const [password, setpassword] = useState("")
          const [currentIndex, setcurrentIndex] = useState(null)
  return (
    <div className='d-flex flex-wrap gap-3'>
      {
        allUsers.map((_, idx)=>(
          <div className="card" style={{width: "18rem"}} key={idx}>
            <div className="card-body">
              <h5 className="card-title">{_.firstName+" "+_.lastName}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{_.email}</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <button className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>setcurrentIndex(idx)}>Edit</button>
              <button className="btn btn-danger" onClick={()=>deleteUser(idx)}>Delete</button>
            </div>
          </div>
        ))

      }


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input type="text" placeholder='first name'  onChange={(e)=>setfirstName(e.target.value)}/>
      <input type="text" placeholder='last name' onChange={(e)=>setlastName(e.target.value)}/>
      <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
      <input type="text" placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={()=>editUser(currentIndex, {firstName, lastName, email, password})}>Save</button>
      </div>
    </div>
  </div>
</div>
      </div>
  )
}

export default DisplayUser