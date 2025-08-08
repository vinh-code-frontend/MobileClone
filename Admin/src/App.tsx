import AppRouter from './routes'
import { Box, useTheme, alpha } from '@mui/material'
import { Toaster } from 'react-hot-toast'

import 'overlayscrollbars/overlayscrollbars.css'
import './assets/style.css'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const theme = useTheme()

  return (
    <>
      <Box
        sx={{
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          height: '100dvh',
          width: '100%',
        }}
      >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}

export default App
