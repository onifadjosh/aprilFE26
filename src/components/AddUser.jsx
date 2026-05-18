import React, { useState } from 'react'

const AddUser = ({addUserProp}) => {
     const [firstName, setfirstName] = useState("")
      const [lastName, setlastName] = useState("")
      const [email, setemail] = useState("")
      const [password, setpassword] = useState("")
  return (
    <div>
         <input type="text" placeholder='first name'  onChange={(e)=>setfirstName(e.target.value)}/>
      <input type="text" placeholder='last name' onChange={(e)=>setlastName(e.target.value)}/>
      <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
      <input type="text" placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/>

      {/* <button onClick={numberChange}>{number}</button> */}


      <button type="submit" onClick={()=>addUserProp({firstName, lastName, email, password})}>submit</button>
    </div>
  )
}

export default AddUser