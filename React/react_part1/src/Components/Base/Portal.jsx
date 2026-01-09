import React from 'react'

const AdminPortal = ()=> <div>Admin Portal</div>
const UserPortal = ()=> <div>User Portal</div>

const Portal = ({role}) => {
  return role==='admin' ? (<AdminPortal></AdminPortal>):(<UserPortal></UserPortal>)
}

export default Portal