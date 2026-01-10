import React, { useContext } from 'react'
import { Data1 } from './Data'
import UpdateUser from './UpdateUser'

const UserProfile = () => {
 const {user,setUser} = useContext(Data1)
  return (
    <div>
      <h1>Name: {user.name}</h1> 
      <h1>Age: {user.age}</h1>
      <UpdateUser Update={setUser} user={user}></UpdateUser>
    </div>
  )
}

export default UserProfile