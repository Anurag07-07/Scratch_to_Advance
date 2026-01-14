import { useState } from "react"

interface IUser{
  name:string
  age:string
  DOB:Date
}

interface ITodo{
  work:string
  isCompleted:boolean
}

const UseStateType = () => {
  const [name,setName] = useState<string>("Anurag")

  const [user,setUser] = useState<IUser>({
    name:"",
    age:"",
    DOB:new Date("1650-01-01")
  })

  const [todos,setTodos] = useState<ITodo[]>([{
    work:"",
    isCompleted:false
  }])

  return (
    <div>UseStateType</div>
  )
}

export default UseStateType