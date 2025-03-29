import BasicSnackbar from '../components/BasicSnackbar';
import GridWrapper from '../components/GridWrapper';
import { useState } from 'react';
import MainButton from '../components/MainButton';
import DataTable from '../components/DataTable';
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
  return (
    <GridWrapper>
      <MainButton onClick={handleClick} variant='contained'>
        Open Snackbar
      </MainButton>
      <BasicSnackbar
        severity='success'
        content='some sort of information here!'
        open={open}
        handleClick={handleClick}
        handleClose={handleClose}
      />
      <DataTable sx={{ mt: 4 }} />
    </GridWrapper>
  );
};

export default Admin;
