import React from 'react'

const products = [
  {id:1,name:"Phone",price:"$699"},
  {id:2,name:"Laptop",price:"$530"},
  {id:3,name:"Headphones",price:"$199"},
]

const Products = () => {
  return (
    <div>
      {
        products.map(({id,name,price})=>{
          return <div key={id}>
            <h1>Name {name}</h1>
            <h1>Price {price}</h1>
          </div>
        })
      }
    </div>
  )
}

export default Products