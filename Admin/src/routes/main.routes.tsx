import BrandManagement from '@/features/brand/pages/BrandManagement'
import Dashboard from '@/features/dashboard/pages/Dashboard'
import { RouteConfig } from './types'
import { Navigate } from 'react-router-dom'
import UsersManagement from '@/features/users/pages/UsersManagement'

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
