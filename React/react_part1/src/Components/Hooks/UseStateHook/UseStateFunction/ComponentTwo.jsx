import React from 'react'

const ComponentTwo = ({count,Increment}) => {
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default ComponentTwo