import BasicSnackbar from '../components/BasicSnackbar';
import GridWrapper from '../components/GridWrapper';
import { useState } from 'react';
import MainButton from '../components/MainButton';
import DataTable from '../components/DataTable';
import { Grid2, Paper } from '@mui/material';
import ThemeToggle from '../components/ThemeToggle';
import BasicCard from '../components/BasicCard';

const Admin = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const useStyles = {
    root: {
      border: 'none',
      boxShadow: 'none!important',
    },
    //other styles and classes//
  };

  return (
    <Paper sx={useStyles.root}>
      <MainButton onClick={handleClick} variant='contained' sx={{ mb: 4 }}>
        Open Snackbar
      </MainButton>
      <Grid2 container spacing={4}>
        <BasicSnackbar
          severity='success'
          content='some sort of information here!'
          open={open}
          handleClick={handleClick}
          handleClose={handleClose}
        />
        <BasicCard content={<ThemeToggle />} />
        <BasicCard content={<ThemeToggle />} />{' '}
        <BasicCard content={<ThemeToggle />} />{' '}
        <BasicCard content={<ThemeToggle />} />
      </Grid2>
    </Paper>
  );
};

export default Admin;
