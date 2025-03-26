import { Grid2 } from '@mui/material';
import MainButton from '../components/MainButton';
import NotificationBell from '../components/NotificationBell';
import Avatar from '@mui/material/Avatar';
import Header from '../components/Header';
import React, { useEffect } from 'react';
import { useGlobalStore } from '../stores/useGlobalStore';
const Auth = () => {
  const { setPageTitle, pageTitle } = useGlobalStore();
  useEffect(() => {
    setPageTitle('authentication');
  }, []);
  return <Grid2 item xs={8}></Grid2>;
};

export default Auth;
