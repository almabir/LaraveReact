import React from 'react'
import Header from './Header'


function UpdateProduct(props) {
  console.warn("Props", props)
  return (
    <>
      <Header />
      <div>
        <h1>Update Product</h1>
      </div>
    </>
  )
}

export default UpdateProduct