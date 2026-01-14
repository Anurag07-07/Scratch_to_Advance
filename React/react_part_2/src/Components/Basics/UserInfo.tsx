import type { Info } from "../../types"

const UserInfo = ({name,age,email}:Info) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <h1>Email:{email}</h1>
    </div>
  )
}

export default UserInfo