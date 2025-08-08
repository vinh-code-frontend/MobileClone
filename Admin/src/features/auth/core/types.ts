import { LOGIN_PROVIDER, ADMIN_STATUS } from './constants'

export type LoginProvider = (typeof LOGIN_PROVIDER)[keyof typeof LOGIN_PROVIDER]
export type AdminStatus = (typeof ADMIN_STATUS)[keyof typeof ADMIN_STATUS]

export type LoginResponse = {
  id: string
  username: string
  name: string
  status: AdminStatus
  loginProvider: LoginProvider
  accessToken: string
  expiresInHours: number
}
