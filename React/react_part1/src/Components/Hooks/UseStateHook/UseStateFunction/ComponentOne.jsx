import React, { useState } from 'react'
import ComponentTwo from './ComponentTwo'

const ComponentOne = () => {
  const [count,setCount] = useState(0)
  function increment(){
    setCount((prev)=>prev+1)
  }
  return (
    <div>
      <ComponentTwo count={count} Increment={increment}></ComponentTwo>
    </div>
  )
}

export default ComponentOne