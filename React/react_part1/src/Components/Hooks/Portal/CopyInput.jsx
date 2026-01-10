import React, { useState } from 'react'
import PopUpContent from './PopUpContent'

const CopyInput = () => {
  const [data,setData] = useState("")
  const [copied,setCopied] = useState(false)

  function HandleCopy(){
    navigator.clipboard.writeText(data).then(()=>{
      setCopied(true)


      setTimeout(()=>{
        setCopied(false)
      },5000)
    })
  }

  return (
    <div>
      <input placeholder='Enter The Data' value={data} onChange={(e)=>setData(e.target.value)} ></input>
      <button onClick={HandleCopy}>Copy Data</button>
      <PopUpContent copied={copied}></PopUpContent>
    </div>
  )
}

export default CopyInput