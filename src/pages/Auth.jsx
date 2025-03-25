import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import { Grid2 } from '@mui/material';
import MainButton from '../components/MainButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationBell from '../components/NotificationBell';

const Auth = () => {
  let array = [2134, 23, 423, 42, 34];

  return (
    <Grid2 item xs={8}>
      Auth page
      <MainButton variant='default'>go to docs</MainButton>
      <NotificationBell content={array.length} />
    </Grid2>
  );
};

export default Auth;
