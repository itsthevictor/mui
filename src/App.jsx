import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Overview from './pages/Overview';
import Dashboard from './layouts/Dashboard';
import Leads from './pages/Leads';
import Users from './pages/Users';
import Admin from './pages/Admin';
import Programmes from './pages/Programmes';
import Clients from './pages/Clients';
import Reports from './pages/Reports';
import Login from './pages/Login';

import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './assets/themes/lightTheme';
import Auth from './pages/Auth';
import { Paper, CssBaseline } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import { useGlobalStore } from './stores/useGlobalStore';
import { darkTheme } from './assets/themes/darkTheme';

function App() {
  const { mode, setMode } = useColorScheme();

  const { theme } = useGlobalStore();
  console.log('mode', theme);

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
        {
          path: 'auth',
          element: <Auth />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
  ]);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline>
        <Paper>
          <RouterProvider router={router} />
        </Paper>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
