import { useEffect, useRef, useState } from "react"

const Timer = () => {
  const [count,setCount] = useState(0)
  const timer = useRef(null)
  
  useEffect(()=>{
      timer.current =  setInterval(()=>{
        setCount((prev)=>prev+1)
      },1000)
      return()=>{
        clearInterval(timer.current)
      } 
  },[])

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={()=>clearInterval(timer.current)}>Stop</button>
    </div>
  )
}

export default Timer