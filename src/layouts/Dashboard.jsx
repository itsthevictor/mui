import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/Header';
import { Grid2, Box } from '@mui/material';
import { useGlobalStore } from '../stores/useGlobalStore';
const Dashboard = () => {
  const { pageTitle } = useGlobalStore();
  const [title, setTitle] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, '');
    if (location.pathname === '/') {
      setTitle('tablou');
    } else {
      setTitle(parsedTitle);
    }
  }, [location]);
  return (
    <Grid2>
      <Navbar />
      <Header title={title} />
      <Box className='dashboard-page'>
        <Outlet />
      </Box>
    </Grid2>
  );
};

export default Dashboard;
