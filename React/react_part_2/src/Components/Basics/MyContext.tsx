import { useState, type ReactNode } from "react";
import { ContextProvider } from "./CreateContext";

const MyContext = ({children}:{
  children:ReactNode
})=>{
  const [count,setCount] = useState(0)

  function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count-1)
  }

  return <ContextProvider.Provider value={{count,increment,decrement}}>
    {children}
  </ContextProvider.Provider>
}

export default MyContext