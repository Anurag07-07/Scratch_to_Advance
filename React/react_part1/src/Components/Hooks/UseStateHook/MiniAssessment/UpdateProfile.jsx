import React, { useState } from 'react'

const UpdateProfile = () => {
  const [user,setUser] = useState({
    name:"AJ",
    age:"21"
  })

  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  
  
  const UpdateProfile = ()=>{
    if(name && name.trim()){
      setUser({
        name:name,
        age:age
      })
    }
  }
  
  return (
    <div>
      <h1>Update Profile</h1>
      <div>
        <h2>Name:{user.name}</h2>
        <h2>Age:{user.age}</h2>
      </div>
      <div>
        <h3>Enter the Age and Name to Update It</h3>
        <input value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Updated Name'></input>
        <input value={age} onChange={(e)=>setAge(e.target.value)}   placeholder='Updated Age'></input>
        <button onClick={UpdateProfile}>Update Profile</button>
      </div>
    </div>
  )
}

export default UpdateProfile

//use Form and onSubmit 
//also see where this is use [name]:value