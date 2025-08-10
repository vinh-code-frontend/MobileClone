import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

// layouts
import MainLayout from '@/layouts/MainLayout/MainLayout'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
// pages
import LoginPage from '@/features/auth/pages/LoginPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'

import { useAppSelector } from '@/app/store'
import mainRoutes from './main.routes'
import authRoutes from './auth.routes'
import { useMemo } from 'react'
import { ADMIN_ROLE } from '@/features/auth/core/constants'

const RequireAuth = () => {
  const loginUser = useAppSelector((state) => state.auth.loginUser)

  if (!loginUser) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

const RequireNoAuth = () => {
  const loginUser = useAppSelector((state) => state.auth.loginUser)

  if (loginUser) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

const AppRoutes = () => {
  const { loginUser } = useAppSelector((state) => state.auth)

  const mainPaths = useMemo(() => {
    const isGlobalAdmin = loginUser?.role === ADMIN_ROLE.GlobalAdmin
    return mainRoutes.getPaths(isGlobalAdmin)
  }, [loginUser])

  const authPaths = useMemo(() => authRoutes.getPaths(), [])
  return (
    <Routes>
      <Route element={<RequireNoAuth />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          {authPaths.map((item) => (
            <Route path={item.path} element={item.component} key={item.key} />
          ))}
        </Route>
      </Route>

      <Route element={<RequireAuth />}>
        <Route element={<MainLayout />}>
          {mainPaths.map((item) => (
            <Route path={item.path} element={item.component} key={item.key} />
          ))}
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
