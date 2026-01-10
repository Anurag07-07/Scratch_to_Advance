import React, { useEffect, useState } from 'react'

const FetchData = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    async function Main(){
      try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const value = await response.json()
      if(value && value.length){
        setData(value)
      }        
      } catch (error) {
        console.log(`Data is not recieved`);
        console.error(error);
      }
    }
    Main()
  },[])
  return (
    <div>
      {
        data.map(({id,title,completed})=>(
          <div key={id}>
            <h1>{title}</h1>
            <h3>{completed ? "Yes" : "No"}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default FetchData