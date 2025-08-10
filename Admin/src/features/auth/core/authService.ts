import api from '@/app/axios'

export const loginAsync = async <R, P extends Record<string, unknown> = Record<string, unknown>>(payload: P) => {
  const res = await api.post('/Admin/login', { ...payload, origin: window.location.origin })
  return res as R
}
