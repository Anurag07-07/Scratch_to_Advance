import { useState, type ChangeEvent, type FormEvent } from "react"

interface IUser{
  name:string
  email:string
  password:string
}

const UserForm = () => {
  const [user,setUser] = useState<IUser>({
    name:"",
    email:"",
    password:""
  })

  function ChangeHandler(e:ChangeEvent<HTMLInputElement>){
    const {name,value} = e.target
    setUser((prev)=>({...prev,[name]:value}))
  }

  function SubmitHandler(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    console.log("Form Data: ",user);
  }

  return (
    <div>
      <h1>User Form Data</h1>
      <form onSubmit={SubmitHandler}>
        <input placeholder=" Enter the Name " onChange={ChangeHandler} name="name"  value={user.name}  ></input>
        <input placeholder=" Enter the Email " onChange={ChangeHandler} name="email" value={user.email}></input>
        <input placeholder=" Enter the Password" onChange={ChangeHandler} name="password" value={user.password}  ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserForm