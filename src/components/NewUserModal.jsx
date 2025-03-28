import React from 'react';
import BasicModal from './BasicModal';
import { TextField, Box } from '@mui/material';
import MainButton from './MainButton';

const NewUserModal = ({ open, handleClose, content }) => {
  const getInputs = () => {
    return (
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        {' '}
        <TextField label='name' />
        <TextField label='email' type='email' />
        <TextField label='password' type='password' />
        <MainButton children='submit' variant='contained' />
      </Box>
    );
  };
  return (
    <BasicModal
      title='New user'
      subtitle='Fill out the inputs and submit'
      open={open}
      handleClose={handleClose}
      content={getInputs()}
    ></BasicModal>
  );
};

export default NewUserModal;
