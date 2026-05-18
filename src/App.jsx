// import React, { useState } from 'react'
// import Button from './components/Button'
// import Navbar from './components/Navbar'

// const App = () => {
//   // let name = "pampam"
//   // const [first, setfirst] = useState(second)
//   //first->the state variable
//   //setfirst-> is the function that helps to mutate the state
//   //second-> the initial value of the state

//   const [count, setcount] = useState(0)
//   const [name, setname] = useState("pampam")
//   return (
//     <div >
//       <Navbar/>

//     <div className='design'>
//       I am going to SQI
//     </div>

//     <h1 className='fs-1 text-danger'>WE are using {name}</h1>

//     <Button/>
//     <Button/>

//     {/* react hooks */}

//     <button className='btn btn-success' onClick={()=>setcount(count+1)}>count is {count}</button>
//     <button onClick={()=>setname("Josh")}>{name}</button>

//       </div>

//   )
// }

// export default App

// import React, { useState } from 'react'
// import Button from './components/Button'
// import AddUser from './components/AddUser'
// import DisplayUser from './components/DisplayUser'

// const App = () => {

//   // const [number, setnumber] = useState(0)
//   const [allUsers, setallUsers] = useState([])

//   // const handleChange=(event)=>{
//   //   console.log(event.target.value)
//   //   setfirstName(event.target.value)
//   // }

//   // const numberChange=()=>{
//   //   setnumber(number+1)
//   //   console.log(number)
//   // }

//   const addUser=(user)=>{
//     // let user = {
//     //   firstName,lastName, email, password
//     // }

//     console.log(user);
//     let fruits = ["mango", "orange", "banana"]
//     let newFruits = [...fruits, "grape"]

//     console.log(newFruits);
//     let newUsers = [...allUsers, user]
//     setallUsers(newUsers)

//   }

//   const deleteUser=(index)=>{
//     let newAllUsers= [...allUsers]
//     newAllUsers.splice(index, 1)

//     setallUsers(newAllUsers)
//   }

//   const editUser=(index, user)=>{

//     let newAllUsers= [...allUsers]
//     newAllUsers.splice(index, 1, user)
//     setallUsers(newAllUsers)
//   }

//   // const shoutPerson=()=>{
//   //   alert("omooooooooo")
//   // }
//   return (
//     <div>

//       {/* <Button title={"Start"} color="btn-success" func={shoutPerson}/>
//       <Button title={"Stop"} color="btn-danger"/>
//       <Button title={"Continue"} color="btn-dark"/> */}
//      <AddUser addUserProp={addUser}/>

//       <hr />

//       <DisplayUser allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>

//     </div>
//   )
// }

// export default App

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Profile from "./Pages/Profile";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import ApiFetch from "./Pages/ApiFetch";
import Formikk from "./Pages/Formikk";
import Cookies from "universal-cookie";
import Authguard from "./auth/Authguard";

const App = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/formikk" element={<Formikk />} />

        {/* <Route  element={<Authguard isAuth={token}/>}> */}
          <Route path="/contact" element={<Contact />} />

          {/* programmatic redirection */}
          <Route path="/sp-contact" element={<Navigate to={"/contact"} />} />

          <Route path="/apiFetch" element={<ApiFetch />} />

          {/* nested routes */}
          <Route path="/layout" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
          </Route>

          {/* dynamic routing */}
          <Route path="/profile/:username" element={<Profile />} />
        {/* </Route> */}
        {/* wild card routing */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
