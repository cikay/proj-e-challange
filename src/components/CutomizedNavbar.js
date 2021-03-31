import React from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Badge,
} from 'react-bootstrap'
import { FiShoppingCart } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { useProductContext } from '../contexts/ProductContext'
export default function CutomizedNavbar() {
  const { addedItems } = useProductContext()
  return (
    <Navbar bg='primary' expand='lg' fixed='top'>
      <Form inline className='my-auto'>
        <FormControl
          type='text'
          placeholder='Search'
          className='align-items-center'
        />
        <Button
          variant='light'
          style={{ marginLeft: '5px',}}
        >
          Search
        </Button>
      </Form>

      <div className='ml-auto text-white'>
        <span color='white'>
          Üyelik <BiUser />
        </span>

        <span style={{ margin: '0 20px 0 20px' }}>
          Sepetim{' '}
          <Badge>
            <FiShoppingCart />
            <span style={{ margin: '0 0 8px 5px' }}>
              {addedItems.length < 1 ? null : addedItems.length}
            </span>
          </Badge>
        </span>
      </div>
    </Navbar>
  )
}
