import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '@/features/auth/core/authSlide'

export const rootReducer = combineReducers({
  auth: authReducer,
  // products: productsReducer,
})
