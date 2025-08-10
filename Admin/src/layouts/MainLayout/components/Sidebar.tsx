import { OverlayScrollbarsComponent as Scrollbar } from 'overlayscrollbars-react'
import { Box, List, ListItemButton, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import mainRoutes from '@/routes/main.routes'
import { useMemo } from 'react'
import { useAppSelector } from '@/app/store'
import { ADMIN_ROLE } from '@/features/auth/core/constants'

const Sidebar = () => {
  const { loginUser } = useAppSelector((state) => state.auth)
  const menu = useMemo(() => {
    const isGlobalAdmin = loginUser?.role === ADMIN_ROLE.GlobalAdmin
    return mainRoutes.getPaths(isGlobalAdmin)
  }, [loginUser])
  return (
    <Box height="100dvh">
      <Typography height={48}>Khẹc khẹc</Typography>
      <Scrollbar style={{ maxHeight: 'calc(100dvh - 48px)' }} options={{ scrollbars: { autoHide: 'leave' } }}>
        <List>
          {menu.map((item) => (
            <Link component={RouterLink} to={item.path} underline="none" key={item.key}>
              <ListItemButton>{item.title}</ListItemButton>
            </Link>
          ))}
        </List>
      </Scrollbar>
    </Box>
  )
}

export default Sidebar
