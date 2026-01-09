import React, { useState } from 'react'

const ArrayUseState = () => {
  const [friends,setFriends] = useState(["anurag AJ","anurag BJ","anurag CJ"])

  function IncrementFriend(){
    let newFriend = [...friends,"anurag"]
    setFriends(newFriend)
  }

  function DecrementFriend(){
    let removeFriend = friends.filter((f)=>f!='anurag')
    setFriends(removeFriend)
  }

  function UpdateFriend(){
    let updateFriend = friends.map((m)=>m === 'anurag' ? "Anurag Raj" : m)   
    setFriends(updateFriend) 
  }

  return (
    <div>
      <h1>
        {
          friends.map((f)=>(
            <div>{f}</div>
          ))
        }
      </h1>
      <button onClick={IncrementFriend}>Increment Friend</button>
      <button onClick={DecrementFriend}>Decrement Friend</button>
      <button onClick={UpdateFriend}>Update Friend</button>
    </div>
  )
}

export default ArrayUseState