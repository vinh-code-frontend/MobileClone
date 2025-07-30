import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';

import '@fontsource/inter';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/style.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
