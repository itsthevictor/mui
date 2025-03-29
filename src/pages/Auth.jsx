import { IconButton, Box, Typography } from '@mui/material';
import BasicCard from '../components/BasicCard';
import SearchBar from '../components/SearchBar';
import MainButton from '../components/MainButton';
import {
  InstallMobile,
  Refresh,
  VerticalAlignCenter,
} from '@mui/icons-material';
import GridWrapper from '../components/GridWrapper';
import NewUserModal from '../components/NewUserModal';
import { useEffect, useState } from 'react';

const Auth = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState(users);
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
      height: 'fit-content',
      minHeight: '65px',
      color: 'gray',
      flexDirection: 'column',
    },
    searchBarInput: {
      width: '100%',
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: '1.1rem',

      paddingLeft: '10px',
      backgroundColor: '#f5f5f5',
    },
  };

  const addNewUser = (data) => {
    console.log('users 1', users);
    // console.log('data', { ...data });

    users.push({ ...data });
    handleClose();
  };

  useEffect(() => {
    getContent();
  }, [users]);

  const getContent = () => {
    return (
      <Box sx={searchBarStyles.content}>
        {users.length ? (
          users.map((item, i) => (
            <Box key={i} sx={{ mb: 2 }}>
              <Typography>User ID:{item.userId}</Typography>
              <Typography>Email: {item.email}</Typography>
              <Typography>Phone Number: {item.phoneNumber}</Typography>
              {/* <Typography>{item}</Typography> */}
            </Box>
          ))
        ) : (
          <Typography align='center'>No users for this project yet</Typography>
        )}
      </Box>
    );
  };

  const getSearchBar = () => {
    const handleSearch = (e) => {
      filterData(e);
    };

    const filterData = (value) => {
      const lowerCaseValue = value.toLowerCase().trim();
      if (lowerCaseValue === '') setUsers(searchResults);
      else {
        const filteredData = searchResults.filter((item) => {
          return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(lowerCaseValue)
          );
        });
        setUsers(filteredData);
      }
    };

    return (
      <Box sx={searchBarStyles.container}>
        <SearchBar
          sx={searchBarStyles.searchBarInput}
          placeholder='Caută numele clientului sau denumirea măsurii'
          onChange={(e) => handleSearch(e.target.value)}
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
      <NewUserModal
        open={open}
        handleClose={handleClose}
        addNewUser={addNewUser}
      />
    </GridWrapper>
  );
};

export default Auth;
