import React, { useState } from 'react'

const BaseUseState = () => {
  const [counter,setCount] = useState(0);

  function increment(){
    setCount(counter+1)
  }

  function decrement(){
    setCount(counter-1)
  }

  return (
    <div>
      <h1>Count:{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default BaseUseState