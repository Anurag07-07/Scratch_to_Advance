import { useRef } from "react"

const FocusInput = () => {

  const userref = useRef<HTMLInputElement>(null)

  function PrintName(){
    userref.current!.focus()
    userref.current!.value = "Anurag"
  }

  return (
    <div>
      <input ref={userref} placeholder="Enter The Name"></input>
      <button onClick={PrintName}>Submit</button>
    </div>
  )
}

export default FocusInput