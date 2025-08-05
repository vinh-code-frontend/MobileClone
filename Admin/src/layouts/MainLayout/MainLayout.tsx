import { Outlet, Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import 'overlayscrollbars/overlayscrollbars.css'

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ bgcolor: 'white' }}>
        <Box>sidebar</Box>
      </Box>
      <Box sx={{ flexGrow: '1' }}>
        <Box>
          <Box>Main layout</Box>
          <Box>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/register">Register</Link>
          </Box>
        </Box>
        <Button variant="contained" color="primary">
          Hello MUI
        </Button>
        <OverlayScrollbarsComponent
          style={{ maxHeight: '300px' }}
          options={{ scrollbars: { autoHide: 'leave' } }}
        >
          <div style={{ height: '120vh', background: '#ccc' }}>vc</div>
        </OverlayScrollbarsComponent>
        <Outlet />
      </Box>
    </Box>
  )
}

export default MainLayout
