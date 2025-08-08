import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginResponse } from './types'
import { LocalStorage } from '@/shared/utils'

export type AuthState = {
  loginUser?: LoginResponse
}

const localStore = new LocalStorage()

const initialState: AuthState = {
  loginUser: localStore.get<LoginResponse>('loginUser') ?? undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<LoginResponse>) => {
      state.loginUser = payload
      localStore.set('loginUser', payload)
    },
    logout(state) {
      state.loginUser = undefined
      localStore.remove('loginUser')
    },
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer
