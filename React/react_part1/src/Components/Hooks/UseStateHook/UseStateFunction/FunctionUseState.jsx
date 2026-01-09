import React, { useState } from 'react'

const FunctionUseState = () => {
  const [counter,setCounter] = useState(()=>{
    let intialCount = 0
    return intialCount
  })
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>setCounter(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default FunctionUseState