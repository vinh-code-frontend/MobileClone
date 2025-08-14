import { Outlet, Link } from 'react-router-dom'
import { Box, Stack, Avatar, useTheme, Typography } from '@mui/material'
import Sidebar from './components/Sidebar'
import { OverlayScrollbarsComponent as Scrollbar } from 'overlayscrollbars-react'
import { useAppSelector } from '@/app/store'
import Person from '@mui/icons-material/Person'
import { useDispatch } from 'react-redux'
import { authActions } from '@/features/auth/core/authSlice'

const MainLayout = () => {
  const loginUser = useAppSelector((state) => state.auth.loginUser)
  const dispatch = useDispatch()
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ bgcolor: 'white', width: 240, flexShrink: 0 }}>
        <Sidebar />
      </Box>
      <Box sx={{
        flexGrow: '1', width: "100%",
        overflowX: "auto"
      }}>
        <Stack flexDirection="row" sx={{ height: '48px', justifyContent: 'space-between', p: 1, alignItems: 'center', boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.12)' }}>
          <Box>Main layout</Box>
          {loginUser ? (
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography sx={{ cursor: 'pointer' }} onClick={() => dispatch(authActions.logout())}>
                Logout
              </Typography>
              <Typography>{loginUser?.name}</Typography>
              <Avatar sx={{ bgcolor: theme.palette.primary.light }}>
                <Person />
              </Avatar>
            </Stack>
          ) : (
            <Box>
              <Link to="/auth/login">Login</Link>
              <Link to="/auth/register">Register</Link>
            </Box>
          )}
        </Stack>
        <Scrollbar style={{ maxHeight: 'calc(100dvh - 48px)' }} options={{
          scrollbars: { autoHide: 'leave' }, overflow: {
            x: 'hidden',
            y: 'scroll',
          },
        }} >
          <Box p={3} sx={{ width: '100%', overflowX: 'auto' }}>
            <Outlet />
          </Box>
        </Scrollbar>
      </Box>
    </Box>
  )
}

export default MainLayout
