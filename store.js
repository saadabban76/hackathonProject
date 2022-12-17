import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './slices/example'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})