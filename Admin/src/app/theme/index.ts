import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
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
