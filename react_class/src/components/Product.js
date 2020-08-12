import React from "react"

function Product(props) {
  const style = { 
    backgroundColor: "white",
    margin: "auto",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }

  return (
    <div style={style}>
      <h2>{props.product.name}</h2>
      <p>Price: {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
      <p>Description: {props.product.description}</p>
    </div>
  )
}

export default Product