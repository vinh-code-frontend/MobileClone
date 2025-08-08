import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

// Các layout component
import MainLayout from '@/layouts/MainLayout/MainLayout'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'

// Các trang
import LoginPage from '@/features/auth/pages/LoginPage'
import RegisterPage from '@/features/auth/pages/RegisterPage'
import { useAppSelector } from '@/app/store'

const RequireAuth = () => {
  const user = useAppSelector('auth')

  if (!user) {
    // Chưa đăng nhập, redirect sang login
    return <Navigate to="/login" replace />
  }

  // Đã đăng nhập thì cho tiếp tục vào
  return <Outlet />
}

const RequireNoAuth = () => {
  const user = useAppSelector('auth')

  if (user) {
    // Nếu đã đăng nhập mà vào login/register thì redirect main
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

function AppRoutes() {
  return (
    <Routes>
      {/* Các route auth (login, register) chỉ cho user chưa đăng nhập */}
      <Route element={<RequireNoAuth />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Route>

      {/* Các route chính, cần đăng nhập */}
      <Route element={<RequireAuth />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<h1>test</h1>} />
          {/* Route quản lý user, yêu cầu GlobalAdmin */}
          {/* <Route element={<RequireAdmin />}>
            <Route path="/users" element={<UserManagement />} />
          </Route> */}
        </Route>
      </Route>

      {/* Có thể thêm route fallback hoặc 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
