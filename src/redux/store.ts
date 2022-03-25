import { configureStore } from '@reduxjs/toolkit';

import shoppingReducer from '../redux/slices/shoppingSlice';

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

export default store;
