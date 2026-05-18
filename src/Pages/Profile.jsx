import React from 'react'
import { useParams } from 'react-router-dom';

const Profile = () => {
    const {username} = useParams()
    // console.log(params);
    
  return (
    <div>This is a profile page for {username}</div>
  )
}

export default Profile