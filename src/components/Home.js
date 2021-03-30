import React from 'react'
import { Row, Col } from 'react-bootstrap'
import BestSellerProducts from '../data-json/data-json/bestSeller'
import RelatedProducts from '../data-json/data-json/relatedProducts'
import ProductsContainer from './ProductsContainer'

export default function Home() {
  return (
    <Row>
      <Col xs={12} md={1}></Col>
      <Col xs={12} md={10}>
        <ProductsContainer products={BestSellerProducts} title='Çok Satanlar' />
        <ProductsContainer products={RelatedProducts} title='Benzer ürünler' />
      </Col>
      <Col xs={12} md={1}></Col>
    </Row>
  )
}
