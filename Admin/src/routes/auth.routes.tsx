import { RouteConfig } from './types'
import LoginPage from '@/features/auth/pages/LoginPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'

const authRoutes = {
  login: {
    key: 'login',
    path: '/auth/login',
    title: 'Login',
    component: <LoginPage />,
  },
  register: {
    key: 'register',
    path: '/auth/register',
    title: 'register',
    component: <RegisterPage />,
  },

  getPaths() {
    const values = Object.values(this).filter((value) => typeof value === 'object') as RouteConfig[]
    console.log(values)
    return values
  },
}

export default authRoutes
