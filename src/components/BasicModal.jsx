import { Modal, Typography, Box, TextField, Divider } from '@mui/material';
import { useState } from 'react';
import MainButton from './MainButton';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: 3,
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #5c5c5c',
  boxShadow: 5,
  p: 4,
};

const BasicModal = ({
  open,
  handleClose,
  title,
  subtitle,
  content,
  onSubmit,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {title}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2, mb: 1 }}>
          {subtitle}
        </Typography>
        <Divider />

        {content}
        <Box
          sx={{
            mt: 4,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
          }}
        >
          {' '}
          <MainButton variant='outlined' onClick={handleClose}>
            cancel
          </MainButton>
          <MainButton variant='contained' onClick={onSubmit}>
            submit
          </MainButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
