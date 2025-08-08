import { Outlet, Link } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import Sidebar from './components/Sidebar'

import { OverlayScrollbarsComponent as Scrollbar } from 'overlayscrollbars-react'

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ bgcolor: 'white', width: 240 }}>
        <Sidebar />
      </Box>
      <Box sx={{ flexGrow: '1' }}>
        <Stack flexDirection="row" sx={{ height: '48px', justifyContent: 'space-between', p: 1, alignItems: 'center', boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.12)' }}>
          <Box>Main layout</Box>
          <Box>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/register">Register</Link>
          </Box>
        </Stack>
        <Scrollbar style={{ maxHeight: 'calc(100dvh - 48px)' }} options={{ scrollbars: { autoHide: 'leave' } }}>
          <Box p={3}>
            <Outlet />
          </Box>
        </Scrollbar>
      </Box>
    </Box>
  )
}

export default MainLayout
