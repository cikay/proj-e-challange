export const ProductTypes = Object.freeze({
  ADDED_PRODUCT: 'ADDED_PRODUCT',
})

export const initialState = {
  addedItems: [],
}

export default function productReducer(state, action) {
  switch (action.type) {
    case ProductTypes.ADDED_PRODUCT:
      console.log('action', action)
      return {
        ...state,
        addedItems: [...state.addedItems, action.payload],
      }
  }
}
