import { createSlice } from '@reduxjs/toolkit';

interface ShoppingState {
  cart: [];
  products: [];
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
      };
    },
    addQuantityOfItem: (state, { payload }) => {
      const { id, quantity } = payload;
      const product = state.cart.find(item => item.id === id);
      const updateProduct = { ...product, quantity: quantity + 1 };
      return {
        ...state,
        cart: [...state.cart.filter(item => item.id !== id), updateProduct],
      };
    },
    removeQuantityOfItem: (state, { payload }) => {
      const { id, quantity } = payload;
      const product = state.cart.find(item => item.id === id);
      const updateProduct = { ...product, quantity: quantity - 1 };
      return {
        ...state,
        cart: [...state.cart.filter(item => item.id !== id), updateProduct],
      };
    },
  },
});

export const { addToCart, addQuantityOfItem, removeQuantityOfItem } =
  slice.actions;

export const shoppingSelector = (state: { shopping: string }) => state.shopping;

export default slice.reducer;
