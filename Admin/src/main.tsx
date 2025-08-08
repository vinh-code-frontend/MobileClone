import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/app/theme'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from '@/app/store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
)
