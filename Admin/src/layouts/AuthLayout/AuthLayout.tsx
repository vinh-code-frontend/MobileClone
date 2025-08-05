import { Box, Stack } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const AutoSwitchLink = () => {
  const { pathname } = useLocation()

  if (pathname === '/auth/login') {
    return <Link to="/auth/register">Register</Link>
  }
  if (pathname === '/auth/register') {
    return <Link to="/auth/login">Login</Link>
  }
  return null
}

const AuthLayout = () => {
  return (
    <Box height="100dvh">
      <Box
        sx={{
          position: 'absolute',
        }}
      >
        <div>AuthLayout</div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <AutoSwitchLink />
      </Box>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: '16px',
          height: '100%',
        }}
      >
        <Outlet />
      </Stack>
    </Box>
  )
}

export default AuthLayout
