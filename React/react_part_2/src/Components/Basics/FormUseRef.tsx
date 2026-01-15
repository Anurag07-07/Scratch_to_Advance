import React, { useRef, useState, type FormEvent } from 'react'

type IUser = {
  name:string
  email:string
  password:string
}

const FormUseRef = () => {

  const [user,setUser] = useState<IUser>({
    name:"",
    email:"",
    password:""
  })

  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  function SubmitHandler(e:FormEvent<HTMLFormElement>){
    e.preventDefault()

    const username = name.current!.value
    const useremail = email.current!.value
    const userpassword = password.current!.value

    setUser({
      name:username,
      email:useremail,
      password:userpassword
    })
  }

  return (
    <>
    <form onSubmit={SubmitHandler}>
      <h1>Form Data</h1>
      <input placeholder='Enter the name' ref={name}></input>
      <input placeholder='Enter the Password' ref={password}></input>
      <input placeholder='Enter the Email' ref={email}></input>
      <button type='submit'>Submit</button>
    </form>
    <section>
      <h1>Name:{user.name}</h1>
      <h1>Email:{user.email}</h1>
      <h1>Password:{user.password}</h1>
    </section>
    </>
  )
}

export default FormUseRef