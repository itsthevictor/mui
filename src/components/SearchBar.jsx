import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchBar = ({ placeholder, onchange }) => {
  return (
    <TextField
      placeholder={placeholder}
      onChange={onchange}
      variant='filled'
      sx={{ width: '100%' }}
    />
  );
};

export default SearchBar;
