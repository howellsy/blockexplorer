import './App.css';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils';
import StoreProvider from './components/providers/StoreProvider';
import { createTheme } from './theme';

function App() {
  const baseTheme = createTheme();

  return (
    <ThemeProvider theme={baseTheme}>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
