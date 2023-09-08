import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../components/pages/Dashboard';
import { NavPaths } from '../config';
import { Block } from '../components/pages/Block';
import { Transaction } from '../components/pages/Transaction';

const router = createBrowserRouter([
  {
    path: NavPaths.ROOT,
    element: <Dashboard />,
  },
  {
    path: `${NavPaths.BLOCK}/:id`,
    element: <Block />,
  },
  {
    path: `${NavPaths.TRANSACTION}/:id`,
    element: <Transaction />,
  },
]);

export default router;
