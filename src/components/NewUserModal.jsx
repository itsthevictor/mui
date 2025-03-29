import React, { useEffect } from 'react';
import BasicModal from './BasicModal';
import { TextField, Box } from '@mui/material';
import MainButton from './MainButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const phoneRegex = /^(?=0[723][2-8]\d{7})(?!.*(.)\1{2,}).{10}$/;

const NewUserModal = ({ open, handleClose, content, addNewUser }) => {
  const [formData, setFormData] = useState({
    userId: '',
    email: '',
    phoneNumber: '',
  });

  const validationSchema = yup.object().shape({
    userId: yup
      .string()
      .required('Please input user ID')
      .min(6, 'userID must be at least 6 characters long'),
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email format'),
    phoneNumber: yup.string().matches(phoneRegex, 'Inbvalid phone number'),
  });

  useEffect(() => {
    setFormData({
      userId: '',
      email: '',
      phoneNumber: '',
    });
  }, [open]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const addUser = (data) => {
    // console.log('add user');
    addNewUser(data);
  };

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
        <TextField
          label='user Id'
          name='userId'
          required
          {...register('userId')}
          error={errors.userId ? true : false}
          helperText={errors.userId?.message}
          onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
          value={formData.userId}
        />
        <TextField
          label='email'
          type='email'
          name='email'
          required
          {...register('email')}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        <TextField
          label='phone'
          type='string'
          required
          {...register('phoneNumber')}
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber?.message}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          value={formData.phoneNumber}
        />
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
      onSubmit={handleSubmit(addUser)}
    />
  );
};

export default NewUserModal;
