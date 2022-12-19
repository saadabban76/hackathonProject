import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './slices/cartCounter'
import  cartReducer  from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  },
})