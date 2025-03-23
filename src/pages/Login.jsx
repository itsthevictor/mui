import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import MainButton from '../components/MainButton';
import { textFieldClasses } from '@mui/material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
const Login = () => {
  const buttonStyles = {
    fontSize: 12,
    borderRadius: 1.5,
    textTransform: 'capitalize',
    color: '#1c1c1c',
    borderColor: '#1c1c1c',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#3a86ff',
      borderColor: '#3a86ff',
      color: '#f1f1f1',
    },
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid item size={8}>
        Login
        <Badge badgeContent={4} color='primary'>
          <MailIcon color='action' />
        </Badge>
      </Grid>
    </Box>
  );
};

export default Login;
