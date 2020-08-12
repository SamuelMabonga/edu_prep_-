import React from "react"
import Product from "./Product"
import products from "./vschoolProducts"


function Products() {
  const Products = products.map(product => {
    return (
        <Product 
          key={product.id} 
          product={product}
        />
    )
  })

  return (
    <div>
      {Products}
    </div>
  )

}

export default Products