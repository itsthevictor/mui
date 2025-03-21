import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Overview from './pages/Overview';
import Dashboard from './layouts/Dashboard';
import Leads from './pages/Leads';
import Users from './pages/Users';
import Admin from './pages/Admin';
import Programmes from './pages/Programmes';
import Clients from './pages/Clients';
import Reports from './pages/Reports';
import Login from './pages/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: 'leads',
          element: <Leads />,
        },
        {
          path: 'clienti',
          element: <Clients />,
        },
        {
          path: 'rapoarte',
          element: <Reports />,
        },
        {
          path: 'masuri',
          element: <Programmes />,
        },
        { path: 'admin', element: <Admin /> },
        { path: 'useri', element: <Users /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
