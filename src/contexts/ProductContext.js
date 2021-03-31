import React from 'react'
import productReducer, { ProductTypes, initialState } from './productReducer'
const ProductContext = React.createContext()
const useProductContext = () => React.useContext(ProductContext)
function ProductProvider({ children }) {
  const [state, dispatch] = React.useReducer(productReducer, initialState)
  function addProduct(payload) {
    dispatch({ type: ProductTypes.ADDED_PRODUCT, payload })
  }

  const value = {
    ...state,
    addProduct,
  }
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}

export { ProductProvider, useProductContext }
