import React from 'react'
import { Row } from 'react-bootstrap'
function CustomizedList({ title, items, style }) {
  return (
    <div className='col-lg-3 col-md-6 mb-4 mb-md-0 ' style={style}>
      <h6>{title}</h6>

      <ul className='list-unstyled mb-0'>
        <div className='d-flex flex-column'>  
          {items.map((item, index) => (
            <div className='row-sm-3'>
              <li key={item + index}>
                <a href='#!' className='text-muted'>
                  {item}
                </a>
              </li>
            </div>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default function CustomizedFooter() {
  return (
    <footer
      className='bg-light text-center text-lg-start'
      style={{ marginTop: '30px' }}
    >
      <div className='container p-4 align-middle'>
        <div className='d-flex justify-content-around'>
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
        </div>
      </div>
    </footer>
  )
}
