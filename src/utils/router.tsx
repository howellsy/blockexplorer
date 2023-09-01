import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../components/pages/Dashboard';
import { NavPaths } from '../config';

const router = createBrowserRouter([{ path: NavPaths.ROOT, element: <Dashboard /> }]);

export default router;
