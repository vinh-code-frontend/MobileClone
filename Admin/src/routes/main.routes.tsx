import { Navigate } from 'react-router-dom'
import { RouteConfig } from './types'
import BrandManagement from '@/features/brand/pages/BrandManagement'
import Dashboard from '@/features/dashboard/pages/Dashboard'
import UsersManagement from '@/features/users/pages/UsersManagement'
import AdminManagement from '@/features/users/pages/AdminManagement'

const mainRoutes = {
  home: {
    path: '/',
    key: 'home',
    component: <Navigate to="/dashboard" replace />,
  },
  dashboard: {
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    component: <Dashboard />,
  },
  brand: {
    key: 'brand-management',
    path: '/brand-management',
    title: 'Brand Management',
    component: <BrandManagement />,
    sidebarLink: true,
  },
  admin: {
    key: 'admin-management',
    path: '/admin-management',
    title: 'admin Management',
    component: <AdminManagement />,
    sidebarLink: true,
  },
  users: {
    key: 'users-management',
    path: '/users-management',
    title: 'Users Management',
    component: <UsersManagement />,
    sidebarLink: true,
  },
  getPaths() {
    const values = Object.values(this).filter((value) => typeof value === 'object') as RouteConfig[]
    console.log(values)
    return values
  },
  getSidebarPaths() {
    const paths = this.getPaths()
    return paths.filter((item) => item.sidebarLink)
  },
}

export default mainRoutes
