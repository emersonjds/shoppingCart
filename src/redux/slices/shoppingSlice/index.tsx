import { createSlice } from '@reduxjs/toolkit'

interface ShoppingState {
  cart: [],
  products: [],
}

export const slice = createSlice({
  name: 'shopping',
  initialState: {
    cart: [],
    products: [],
  } as ShoppingState,
  reducers: {
    addToCart: (state, { payload }) => {
      return {
        ...state,
        cart: [...state.cart, payload],
      }
    },
  }
})

export const { addToCart } = slice.actions;

export const shoppingSelector = (state: { shopping: string }) => state.shopping;

export default slice.reducer;