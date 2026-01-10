import { useState } from 'react'
import { Data1 } from './Data'


export const UserProvider = ({children})=>{

  const [user,setUser] = useState({
    name:"Anurag",
    age:21
  })

  
  return(
  <Data1.Provider value={{user,setUser}} >
    {children}
  </Data1.Provider>
  )
}