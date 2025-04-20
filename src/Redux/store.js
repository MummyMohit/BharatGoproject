import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import modalReducer from './modelSlice'
import authReducer from './authSlice'
export const store = configureStore({
    reducer: {
        products :productReducer,
        modal :modalReducer,
        auth :authReducer
    },
  })