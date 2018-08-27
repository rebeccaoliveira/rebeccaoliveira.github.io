import React from 'react'

const Product = ({ children, backgroundColor }) => (
  <h1 style={{backgroundColor: backgroundColor}}>
    {children}
  </h1>
)

export default Product
