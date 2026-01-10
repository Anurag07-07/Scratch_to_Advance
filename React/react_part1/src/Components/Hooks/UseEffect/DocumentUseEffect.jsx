import React, { useEffect, useState } from 'react'

const DocumentUseEffect = () => {
  const [data,setData] = useState("")
  const [count,setCount] = useState(0)

  useEffect(()=>{
    document.title = `Today ${data}`
    if(count>5){
      document.querySelector('body').style.background = "red"
    }
  },[data,count])

  return (
    <div>
      <input placeholder='Enter The Title' value={data} onChange={(e)=>setData(e.target.value)}></input>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default DocumentUseEffect