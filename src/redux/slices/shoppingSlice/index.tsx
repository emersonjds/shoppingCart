import { createSlice } from '@reduxjs/toolkit';

interface ShoppingState {
  cart: [];
}

export const slice = createSlice({
  name: 'shopping',
  initialState: {
    cart: [],
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
        cart: [
          ...state.cart.map(item => {
            if (item.id === id) {
              return updateProduct;
            }
            return item;
          }),
        ],
      };
    },
    removeQuantityOfItem: (state, { payload }) => {
      const { id, quantity } = payload;
      let updateProduct = {};
      return {
        ...state,
        cart: [
          ...state.cart.map(item => {
            if (item.id === id) {
              updateProduct = { ...item, quantity: quantity - 1 };
              return updateProduct;
            }
            return item;
          }),
        ],
      };
    },
    removeAllFromCart: state => {
      return {
        ...state,
        cart: [],
      };
    },
  },
});

export const { addToCart, addQuantityOfItem, removeQuantityOfItem } =
  slice.actions;

export const shoppingSelector = (state: { shopping: any }) => state.shopping;

export default slice.reducer;
