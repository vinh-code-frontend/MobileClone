import { LoginUser } from '@/features/auth/core/types'
import { LocalStorage } from '@/shared/utils'
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
})

api.interceptors.request.use(
  (config) => {
    const localStore = new LocalStorage()
    const loginUser = localStore.get<LoginUser>('loginUser')
    if (loginUser?.accessToken) {
      config.headers.Authorization = `Bearer ${loginUser.accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
