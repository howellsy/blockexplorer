import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils';
import StoreProvider from './components/providers/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

export default App;
