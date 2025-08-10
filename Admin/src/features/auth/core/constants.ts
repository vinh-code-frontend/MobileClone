export const LOGIN_PROVIDER = {
  Local: 'Local',
  Facebook: 'Facebook',
  Zalo: 'Zalo',
  Gmail: 'Gmail',
} as const

export const ADMIN_STATUS = {
  Pending: 'Pending',
  Active: 'Active',
  Inactive: 'Inactive',
  Banned: 'Banned',
  Deleted: 'Deleted',
} as const

export const ADMIN_ROLE = {
  GlobalAdmin: 'GlobalAdmin',
  Admin: 'Admin',
} as const
