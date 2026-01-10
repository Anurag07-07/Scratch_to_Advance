import React from 'react'

const UpdateUser = ({Update,user}) => {

  function UpdateFun(){
    Update({...user,name:"Anurag Raj",age:"22"})
  }

  return (
    <button onClick={UpdateFun}>
      Click to update
    </button>
  )
}

export default UpdateUser