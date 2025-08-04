import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '@/layouts/MainLayout/MainLayout'

import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
import LoginPage from '@/features/auth/pages/LoginPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      // { path: 'about', Component: About },
      // {
      //   path: 'concerts',
      //   children: [
      //     { index: true, Component: ConcertsHome },
      //     { path: ':city', Component: ConcertsCity },
      //     { path: 'trending', Component: ConcertsTrending }
      //   ]
      // }
    ],
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      { path: 'login', Component: LoginPage, index: true },
      { path: 'register', Component: RegisterPage },
    ],
  },
])

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
