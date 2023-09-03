import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../components/pages/Dashboard';
import { NavPaths } from '../config';
import { Block } from '../components/pages/Block';

const router = createBrowserRouter([
  {
    path: NavPaths.ROOT,
    element: <Dashboard />,
  },
  {
    path: `${NavPaths.BLOCK}/:id`,
    element: <Block />,
  },
]);

export default router;
