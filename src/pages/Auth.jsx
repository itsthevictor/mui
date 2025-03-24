import React from 'react';
import Badge from '@mui/material/Badge';
import { Grid2 } from '@mui/material';
import MainButton from '../components/MainButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationBell from '../components/NotificationBell';

const Auth = () => {
  let array = [1, 2, 34];
  return (
    <Grid2 item xs={8}>
      Auth page <NotificationBell content={array.length} />
    </Grid2>
  );
};

export default Auth;
