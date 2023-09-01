import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import AlchemyProvider from './components/particles/AlchemyProvider';
import { router } from './utils';
import StoreProvider from './components/providers/StoreProvider';

function App() {
  return (
    <AlchemyProvider>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </AlchemyProvider>
  );
}

export default App;
