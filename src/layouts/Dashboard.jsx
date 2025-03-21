import React from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
const Dashboard = () => {
  return (
    <main>
      {' '}
      <Navbar />
      <div className='dashboard-page'>
        {' '}
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
