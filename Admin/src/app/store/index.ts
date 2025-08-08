import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { useSelector } from 'react-redux'

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = (sliceName: keyof RootState) => {
  const state = useSelector((state: RootState) => state[sliceName])
  return state
}
