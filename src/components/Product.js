import React, { Profiler } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useProductContext } from '../contexts/ProductContext'
import { IoMdStarOutline } from 'react-icons/io'
import CenteredContainer from './CenteredContainer'
const currencyIcons = {
  tl: '₺',
  dlr: '$',
}

const getCurrencyIcon = (cur) => currencyIcons[cur.toLowerCase()]

export default function Product({ productInfo }) {
  const { addProduct } = useProductContext()
  const handleClick = () => {
    addProduct(productInfo)
  }

  return (
    <Card style={{ height: '400px' }}>
      <Card.Body style={{ height: '100%', width: '100%' }}>
        <div>
          <img className='rounded mx-auto d-block' src={productInfo.img} />
          <p className='text-center' style={{ marginTop: '10px' }}>
            <IoMdStarOutline display='inline' style={{ marginBottom: '4px' }} />
            <span>
              {productInfo.rating}{' '}
              <span className='text-muted text-capitalize'>
                ({productInfo.comment} Yorum)
              </span>{' '}
            </span>
          </p>
          <p className='text-center'>{productInfo.title}</p>
          <div className='text-primary text-center mb-auto p-2'>
            <span className='font-weight-bold'>
              {productInfo.cur && getCurrencyIcon(productInfo.cur)}
            </span>{' '}
            {productInfo.price}
          </div>
        </div>
      </Card.Body>
      <Button
        variant='primary'
        onClick={handleClick}
        style={{ margin: '0 20px 5px 20px' }}
      >
        Sepete Ekle
      </Button>
    </Card>
  )
}
