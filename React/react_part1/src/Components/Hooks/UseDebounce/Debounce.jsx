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
  const debounceValue = useDebounce(value,400)
 
  useEffect(()=>{
    console.log("Backend Called");
    
  },[debounceValue])

  function ChangeHandler(e){
    setValue(e.target.value)
  }

  return (
    <div>
      <input value={value} placeholder='Enter the Value' onChange={ChangeHandler}></input>
    </div>
  )
}

export default Debounce