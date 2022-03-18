import { configureStore } from '@reduxjs/toolkit'

import shoppingReducer from '../redux/slices/shoppingSlice'

const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  }
})

export default store;
