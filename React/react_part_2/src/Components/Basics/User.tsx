import type { ReactNode } from "react"

interface IUser{
  name:string
  age:number
  isStudent:boolean
  children:ReactNode
}

// const User:FC<IUser> = ({name,age,isStudent}) => {
//   return (
//     <div>
//       <h1>Name {name}</h1>
//       <h1>Age {age}</h1>
//       <h1>IsStudent {isStudent  ? "Yes":"No"}</h1>
//     </div>
//   )
// }

const User = ({name,age,isStudent,children}:IUser) => {
  return (
    <div>
      <h1>{children}</h1>
      <h1>Name {name}</h1>
      <h1>Age {age}</h1>
      <h1>IsStudent {isStudent  ? "Yes":"No"}</h1>
    </div>
  )
}

export default User