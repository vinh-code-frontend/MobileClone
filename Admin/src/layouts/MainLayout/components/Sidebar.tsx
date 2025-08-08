import React from 'react'
import { OverlayScrollbarsComponent as Scrollbar } from 'overlayscrollbars-react'
import { Box } from '@mui/material'

const Sidebar = () => {
  return (
    <Box height="100dvh">
      <Scrollbar style={{ maxHeight: '100dvh' }} options={{ scrollbars: { autoHide: 'leave' } }}>
        <div style={{ height: '120vh' }}>vc</div>
      </Scrollbar>
    </Box>
  )
}

export default Sidebar
