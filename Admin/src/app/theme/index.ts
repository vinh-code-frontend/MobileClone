import { deepPurple } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    primary: {
      main: deepPurple[500],
      contrastText: '#fff',
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#d32f2f',
        },
      },
    },
  },
})

export default theme
