import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginResponse, LoginUser } from './types'
import { LocalStorage } from '@/shared/utils'
import dayjs from 'dayjs'

export type AuthState = {
  loginUser?: LoginUser
}

const localStore = new LocalStorage()

const initialState: AuthState = {
  loginUser: localStore.get<LoginUser>('loginUser') ?? undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<LoginResponse>) => {
      const expiresAt = dayjs().add(payload.expiresInHours, 'hour').valueOf() - 1
      state.loginUser = { ...payload, expiresAt: expiresAt }
      localStore.set('loginUser', state.loginUser)
    },
    logout(state) {
      state.loginUser = undefined
      localStore.remove('loginUser')
      window.location.reload()
    },
  },
})

export const authActions = authSlice.actions

export default authSlice.reducer
