import React, { useRef } from 'react'

const UseRefHook = () => {
  const inputElement = useRef(null)

  function Focus(){
    inputElement.current.focus()
    inputElement.current.value ="Anurag Raj"
  }
   return (
    <div>
      <input ref={inputElement}></input>
      <button onClick={Focus}>Focus on Input</button>
    </div>
  )
}

export default UseRefHook