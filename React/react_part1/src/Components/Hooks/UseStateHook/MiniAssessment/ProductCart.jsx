import React, { useState } from 'react'

const ProductCart = () => {
  const [productList,setProdcutList] = useState([{id:1,name:"Macbook",Quantity:25}])
  const [product,setProduct] = useState({
    id:productList.length,
    name:"",
    Quantity:0
  })

  function AddProduct(e){
    e.preventDefault();
    if(product.name && product.name.length){
      setProdcutList([...productList,product])
      setProduct({
        name:"",
        Quantity:0
      })
    }
  }

  function ChangeHandler(e){
    let {name,value} = e.target
    setProduct({...product,[name]:value})
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
        <form onSubmit={AddProduct}>
          <h2>Add Products</h2>
          <input name='name' value={product.name} onChange={ChangeHandler}  placeholder='Enter the Product'></input>
          <input name='Quantity' value={product.Quantity} onChange={ChangeHandler}   placeholder='Enter the Quantity'></input>
          <button type='submit'>Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default ProductCart


//Mistake To Recover Use Form Instead of Normal Input and Submit Button 
//Apply PreventDefault to Protect Direct Submission