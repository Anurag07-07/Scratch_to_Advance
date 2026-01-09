import React, { useEffect, useState } from 'react'

const MiniProject1 = () => {
  const [name,setName] = useState(()=>{
    const savedName = localStorage.getItem('name')
    return savedName ? JSON.parse(savedName) : ""
  })

  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name))
  },[name])


  function ChangeName(e){
    setName(e.target.value)
  }

  return (
    <div>
      <h1>Name: {name}</h1>
      <input value={name} onChange={ChangeName}  placeholder='Enter the Name'></input>
      <button onClick={()=>{
        setName("")
      }}>Clear</button>
    </div>
  )
}

export default MiniProject1