import { Grid2, IconButton, Box, Typography } from '@mui/material';
import BasicCard from '../components/BasicCard';
import SearchBar from '../components/SearchBar';
import MainButton from '../components/MainButton';
import { Refresh, VerticalAlignCenter } from '@mui/icons-material';
import GridWrapper from '../components/GridWrapper';
import BasicModal from '../components/BasicModal';
import { useState } from 'react';

const Auth = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const searchBarStyles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      position: 'relative',
    },
    actions: {
      position: 'absolute',
      right: '0',
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '65px',
      color: 'gray',
    },
    searchBarInput: {
      width: '100%',
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: '1.1rem',

      paddingLeft: '10px',
      backgroundColor: '#f5f5f5',
    },
  };
  const getContent = () => {
    return (
      <Box sx={searchBarStyles.content}>
        <Typography align='center'>No users for this project yet</Typography>
      </Box>
    );
  };
  const getSearchBar = () => {
    const handleChange = (e) => {
      console.log(e);
    };

    return (
      <Box sx={searchBarStyles.container}>
        <SearchBar
          sx={searchBarStyles.searchBarInput}
          placeholder='Caută numele clientului sau denumirea măsurii'
          onChange={(e) => handleChange(e.target.value)}
        />
        <Box sx={searchBarStyles.actions}>
          <MainButton
            children='add user'
            variant='contained'
            sx={searchBarStyles.button}
            onClick={handleOpen}
          />
          <IconButton>
            <Refresh />
          </IconButton>
        </Box>
      </Box>
    );
  };
  return (
    <GridWrapper>
      <BasicCard
        header={getSearchBar()}
        sx={{ maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto' }}
        content={getContent()}
      />
      <BasicModal open={open} handleClose={handleClose} />
    </GridWrapper>
  );
};

export default Auth;
