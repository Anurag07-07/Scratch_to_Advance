import type { AdminInfoList } from "../../types"

const AdminInfo = ({name,age,salary,companyname,email}:AdminInfoList) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <h1>Salary:{salary}</h1>
      <h1>Company:{companyname}</h1>
      <h1>Email:{email}</h1>
    </div>
  )
}

export default AdminInfo