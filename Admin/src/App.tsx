import AppRouter from './routes'
import { Box, useTheme, alpha } from '@mui/material'

import '@fontsource/inter'
import './assets/style.css'

const App = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        height: '100dvh',
        width: '100%',
      }}
    >
      <AppRouter />
    </Box>
  )
}

export default App
