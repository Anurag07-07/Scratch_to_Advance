import React, { useState } from 'react'

const ArrayOfObject = () => {
  const [Cars,setCars] = useState([
    {id:1,name:"P1",brand:"Maclaren"},
    {id:2,name:"Chiron",brand:"Buggati"},
    {id:3,name:"M5",brand:"BMW"},
  ])

  function UpdateModal(){
    let update = Cars.map((m)=>m.id===1 ? {...m,name:"SpeedTail"}:m)
    setCars(update)
  }
  return (
    <div>
      <h1>
        {
          Cars.map(({name,brand})=>{
            return <div>
              <h2>Brand: {brand}</h2>
              <h2>Name: {name}</h2>
            </div>
          })
        }
      </h1>
      <button onClick={UpdateModal}>Update Modal</button>
    </div>
  )
}

export default ArrayOfObject