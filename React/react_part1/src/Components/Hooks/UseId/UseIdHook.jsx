import React, { useId } from 'react'

const UseIdHook = () => {
  const id = useId()
  return (
    <div>
      <label htmlFor={`${id}-email`}>
        <input placeholder='Email' id={`${id}-email`}></input>
      </label>
      <label htmlFor={`${id}-email1`}>
        <input placeholder='Email' id={`${id}-email`}></input>
      </label>
    </div>
  )
}

export default UseIdHook