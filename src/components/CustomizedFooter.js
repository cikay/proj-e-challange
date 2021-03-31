import React from 'react'
import { Row } from 'react-bootstrap'
function CustomizedList({ title, items, style }) {
  return (
    <div
      classNameName='col-lg-3 col-md-6 mb-4 mb-md-0 d-flex flex-column p-2 flex-wrap'
      style={style}
    >
      <h5 classNameName='text-uppercase'>{title}</h5>
      <ul classNameName='list-unstyled mb-0'>
        {items.map((item, index) => (
          <li key={item + index} style={{ position: 'left' }}>
            <a href='#!' classNameName='text-dark'>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CustomizedFooter() {
  return (
    <footer className='bg-light text-center text-lg-start'>
      <div className='container p-4'>
        <Row>
          <CustomizedList
            title='Kurumsal'
            items={[
              'Elektronik',
              'Beyaz Eşya',
              'Koltuk Takımı',
              'Elektronik',
              'Beyaz Eşya',
              'Koltuk Takımı',
              'Elektronik',
              'Beyaz Eşya',
              'Koltuk Takımı',
            ]}
          />
          <CustomizedList
            title='Kategoriler'
            items={[
              'Elektronik',
              'Beyaz Eşya',
              'Koltuk Takımı',
              'Elektronik',
              'Beyaz Eşya',
              'Koltuk Takımı',
              'Elektronik',
              'Beyaz Eşya',
              'Koltuk Takımı',
            ]}
            style={{ marginLeft: '70px' }}
          />
          <CustomizedList
            title='Özel Ürünler'
            items={[
              'Ürün1',
              'Ürün2',
              'Ürün3',
              'Ürün4',
              'Ürün5',
              'Ürün6',
              'Ürün7',
              'Ürün8',
              'Ürün9',
              'Ürün10',
              'Ürün11',
              'Ürün12',
            ]}
            style={{ marginLeft: '70px' }}
          />
        </Row>
      </div>
    </footer>
  )
}
