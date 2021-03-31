import React from 'react'

function CustomizedList({ title, items, style }) {
  return (
    <div className='col-lg-3 col-md-6 mb-4 mb-md-0 ' style={style}>
      <h6>{title}</h6>
      <div className='d-flex flex-col flex-wrap'>
        {items.map((item, index) => (
          <div key={index} className='col-sm-4 p-2'>
            <a href='#!' className='text-muted'>
              {item}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CustomizedFooter() {
  return (
    <footer
      className='bg-light text-center text-lg-start'
      style={{ marginTop: '30px' }}
    >
      {' '}
      <div className='container p-4 align-middle'>
        <div className='d-flex justify-content-around'>
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
