import React, { useState } from 'react'

const ProductCart = () => {
  const [productList,setProdcutList] = useState([{id:1,name:"Macbook",Quantity:25}])
  const [product,setProduct] = useState({
    id:productList.length,
    name:"",
    Quantity:0
  })

  function AddProduct(){
    setProdcutList([...productList,product])
    setProduct({
      name:"",
      Quantity:0
    })
  }

  function AddProd(e){
    let prod = e.target.value
    setProduct({...product,name:prod})
  }
  
  function AddQuant(e){
    let quan = e.target.value
    setProduct({...product,Quantity:quan})
  }
  return (
    <div>
      <div>
        <h1>Products</h1>
        <div>
          {
            productList.map((p)=>{
              return <div key={p.id}>
                <h3>Name: {p.name} Quantity: {p.Quantity}</h3>
              </div>
            })
          }
        </div>
        <div>
          <h2>Add Products</h2>
          <input value={product.name} onChange={AddProd}  placeholder='Enter the Product'></input>
          <input value={product.Quantity} onChange={AddQuant}   placeholder='Enter the Quantity'></input>
          <button onClick={AddProduct}>Add Product</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCart