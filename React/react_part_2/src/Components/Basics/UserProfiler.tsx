import  { useState, type ChangeEvent } from 'react'

interface IUser{
  name:string
  age:string
}

const UserProfiler = () => {
  const [user,setUser] = useState<IUser>({
    name:"",
    age:""
  })

  function ChangeHandler(e:ChangeEvent<HTMLInputElement>){
    const {name,value} = e.target
    setUser((prev)=>({...prev,[name]:value}))
  }

  return (
    <div>
        <input type='text' name='name' value={user.name} placeholder='Enter The Name' onChange={ChangeHandler}></input>
        <input type='text' name='age' value={user.age} placeholder='Enter The Age' onChange={ChangeHandler}></input>
      <div>
        <h1>Name:{user.name}</h1>
        <h1>Age:{user.age}</h1>
      </div>
    </div>
  )
}

export default UserProfiler