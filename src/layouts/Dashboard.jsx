import React from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import { Grid2, Box } from '@mui/material';
import { useGlobalStore } from '../stores/useGlobalStore';
const Dashboard = () => {
  const { pageTitle } = useGlobalStore();
  return (
    <Grid2>
      <Navbar />
      <Header title={pageTitle} />
      <Box className='dashboard-page'>
        <Outlet />
      </Box>
    </Grid2>
  );
};

export default Dashboard;
