import React, { Profiler } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useProductContext } from '../contexts/ProductContext'
import { IoMdStarOutline } from 'react-icons/io'


export default function Product({ productInfo }) {
  const { addProduct } = useProductContext()
  const handleClick = () => {
    addProduct(productInfo)
  }

  return (
    <Card style={{ height: '400px' }}>
      <Card.Body>
        <img src={productInfo.img} />
        <div>
          <IoMdStarOutline display='inline' />
          <span display='inline'>{productInfo.rating}</span>
          <p className='text-muted' display='inline'>
            ({productInfo.comment} Yorum)
          </p>
        </div>
        <span>{productInfo.title}</span>
        <div>
          {productInfo.cur} {productInfo.price}
        </div>
      </Card.Body>
      <Button variant='primary' onClick={handleClick} >
        Sepete Ekle
      </Button>
    </Card>
  )
}
