import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import { Input } from '@mui/material';

const SearchBar = ({ placeholder, onChange, searchBarInput }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        paddingTop: '12px',
        paddingBottom: '12px',
      }}
    >
      <Search
        sx={{
          marginRight: '10px',
          marginLeft: '10px',
        }}
      />
      <TextField
        placeholder={placeholder}
        onChange={onChange}
        variant='standard'
        fullWidth
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  );
};

export default SearchBar;
