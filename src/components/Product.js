import React, { Profiler } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'
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
    <Card style={{ height: '100%', width: '100%' }}>
      <Card.Body>
        <div style={{ height: '25%' }}>
          <img className='rounded mx-auto d-block' src={productInfo.img} />
        </div>
        <div style={{ height: '5%', marginTop: '6%' }}>
          <p className='text-center' style={{ marginTop: '10px' }}>
            <IoMdStarOutline style={{ marginBottom: '4px' }} />
            <span>
              {productInfo.rating}{' '}
              <span className='text-muted text-capitalize'>
                ({productInfo.comment} Yorum)
              </span>{' '}
            </span>
          </p>
        </div>
        <div style={{ height: '25%', marginTop: '6%' }}>
          <p className='text-center'>{productInfo.title}</p>
        </div>
        <div style={{ height: '20%', marginTop: '6%' }}>
          <div className='text-primary text-center mb-auto p-2'>
            <span className='font-weight-bold'>
              {productInfo.cur && getCurrencyIcon(productInfo.cur)}
            </span>{' '}
            {productInfo.price}
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <Button
            variant='primary'
            onClick={handleClick}
            style={{ margin: '0 20px 5px 20px' }}
          >
            Sepete Ekle
          </Button>
        </div>
      </Card.Body>
      {/* <Button
        variant='primary'
        onClick={handleClick}
        style={{ margin: '0 20px 5px 20px' }}
      >
        Sepete Ekle
      </Button> */}
    </Card>
  )
}
