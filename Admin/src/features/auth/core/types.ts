import { LOGIN_PROVIDER, ADMIN_STATUS, ADMIN_ROLE } from './constants'

export type LoginProvider = (typeof LOGIN_PROVIDER)[keyof typeof LOGIN_PROVIDER]
export type AdminStatus = (typeof ADMIN_STATUS)[keyof typeof ADMIN_STATUS]
export type AdminRole = (typeof ADMIN_ROLE)[keyof typeof ADMIN_ROLE]

export type LoginResponse = {
  id: string
  username: string
  name: string
  status: AdminStatus
  role: AdminRole
  loginProvider: LoginProvider
  accessToken: string
  expiresInHours: number
}

export type LoginUser = LoginResponse & {
  expiresAt: number
}
