import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import MainButton from '../components/MainButton';
import { textFieldClasses } from '@mui/material';

const Login = () => {
  const buttonStyles = {
    fontSize: 12,
    borderRadius: 1.5,
    textTransform: 'capitalize',
    color: '#1c1c1c',
    borderColor: '#1c1c1c',
    fontWeight: 600,
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid item size={8}>
        Login
        <MainButton
          size='small'
          children='submit'
          variant='outlined'
          sx={buttonStyles}
        />
      </Grid>
    </Box>
  );
};

export default Login;
