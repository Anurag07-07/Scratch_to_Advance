import React, { useEffect, useRef, useState } from 'react'

function useDebounce(value,time){
  const [debounceValue,setdebounceValue] = useState(value)
  const ref = useRef()

  useEffect(()=>{
    ref.current = setTimeout(()=>{
      setdebounceValue(value)
    },time)

    return()=>{
      clearTimeout(ref.current)
    }

  },[time,value])
  return debounceValue
}

const Debounce = () => {

  const [value,setValue] = useState("")
  const debounceValue = useDebounce(value,2000)
 
  useEffect(()=>{
    console.log("Backend Called");
    
  },[debounceValue])

  function ChangeHandler(e){
    setValue(e.target.value)
  }

  return (
    <div>
      <input value={value} placeholder='Enter the Value' onChange={ChangeHandler}></input>
      <h1>{debounceValue}</h1>
    </div>
  )
}

export default Debounce