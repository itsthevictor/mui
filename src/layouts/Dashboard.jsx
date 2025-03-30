import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/Header';
import { Grid2, Box, Typography } from '@mui/material';
import { useGlobalStore } from '../stores/useGlobalStore';
const Dashboard = () => {
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
      <Box>
        <Header title={title} />
        <Box
          sx={{
            pt: '100px',
            pl: '180px',
            pr: '2rem',

            minHeight: '100vh',
          }}
        >
          <Typography sx={{ color: 'pageHeading.main' }} variant='h1'>
            oiii
          </Typography>
          <Outlet />
        </Box>
      </Box>
    </Grid2>
  );
};

export default Dashboard;
