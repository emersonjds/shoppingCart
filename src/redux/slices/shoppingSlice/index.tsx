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
      return {
        ...state,
        cart: [
          ...state.cart.map(item =>
            item.id === id ? { ...item, quantity: quantity + 1 } : item,
          ),
        ],
      };
    },
    removeQuantityOfItem: (state, { payload }) => {
      const { id, quantity } = payload;
      return {
        ...state,
        cart: [
          ...state.cart.map(item =>
            item.id === id ? { ...item, quantity: quantity - 1 } : item,
          ),
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

export const {
  addToCart,
  addQuantityOfItem,
  removeQuantityOfItem,
  removeAllFromCart,
} = slice.actions;

export const shoppingSelector = (state: { shopping: any }) => state.shopping;

export default slice.reducer;
