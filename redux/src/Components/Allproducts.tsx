import React from 'react'
import { useGetAllProductQuery } from '../app/service/dummyData'
const Allproducts = () => {
  const {data,isLoading,isError} = useGetAllProductQuery()

  if (isError) {
    return <h1>Error</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }


  return (
    <div>
      {
        data?.products.map((p)=>(
          <h1 key={p.id}>{p.title}</h1>
        ))
      }
    </div>
  )
}

export default Allproducts