import React, { useState } from 'react'
import './ProductCart.css'

const ProductCart = () => {
  const [productList, setProdcutList] = useState([{ id: 1, name: "Macbook", Quantity: 25 }])
  const [product, setProduct] = useState({
    id: productList.length,
    name: "",
    Quantity: 0
  })

  function AddProduct(e) {
    e.preventDefault();
    if (product.name && product.name.length) {
      setProdcutList([...productList, product])
      setProduct({
        name: "",
        Quantity: 0
      })
    }
  }

  function ChangeHandler(e) {
    let { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  return (
    <div className="product-cart-container">
      <div className="product-cart-wrapper">
        <h1 className="product-cart-title">Products</h1>
        <div className="products-list">
          {
            productList.map((p) => {
              return <div key={p.id} className="product-item">
                <h3 className="product-info">
                  <span className="product-name">{p.name}</span>
                  <span className="product-quantity">Qty: {p.Quantity}</span>
                </h3>
              </div>
            })
          }
        </div>
        <form onSubmit={AddProduct} className="add-product-form">
          <h2 className="form-title">Add Products</h2>
          <div className="form-inputs">
            <input
              name='name'
              value={product.name}
              onChange={ChangeHandler}
              placeholder='Enter the Product'
              className="form-input"
            />
            <input
              name='Quantity'
              value={product.Quantity}
              onChange={ChangeHandler}
              placeholder='Enter the Quantity'
              className="form-input"
              type="number"
            />
          </div>
          <button type='submit' className="submit-button">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default ProductCart


//Mistake To Recover Use Form Instead of Normal Input and Submit Button
//Apply PreventDefault to Protect Direct Submission