import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import AlchemyProvider from './components/particles/AlchemyProvider';
import { router } from './utils';

function App() {
  return (
    <AlchemyProvider>
      <RouterProvider router={router} />
    </AlchemyProvider>
  );
}

export default App;
