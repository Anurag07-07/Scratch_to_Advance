import React, { useEffect, useRef, useState } from 'react'

const UsePrev = () => {

  const usePrev = (value)=>{
    const ref = useRef()

    useEffect(()=>{
      ref.current = value
    },[value])

    return ref.current
  }

  const [ count,setCount] = useState(0)
  const value = usePrev(count) 
  return (
    <div>
      <h2>The Current Value is {count}</h2>
      <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
      <h2>The Prev Value is {value}</h2>
    </div>
  )
}

export default UsePrev