import React from 'react'
import Product from './Product'
export default function ProductsContainer({ products, title }) {
  return (
    <>
      <h4>{title}</h4>
      <div className='d-flex flex-wrap '>
        {products.map((product) => (
          <div className='col-sm-3'>
            <Product productInfo={product} />
          </div>
        ))}
      </div>
    </>
  )
}
