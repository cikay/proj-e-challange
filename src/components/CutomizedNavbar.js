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
    <Navbar bg='light' expand='lg'>
      <Form inline className='my-auto'>
        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        <Button variant='outline-success'>Search</Button>
      </Form>

      <div className='ml-auto'>
        <span>
          Üyelik <BiUser />
        </span>

        <span style={{ margin: '0 20px 0 20px' }}>
          Sepetim{' '}
          <Badge>
            <FiShoppingCart />
            {addedItems.length < 1 ? null : addedItems.length}
          </Badge>
        </span>
      </div>
    </Navbar>
  )
}
