import { Grid2, IconButton, Box } from '@mui/material';
import BasicCard from '../components/BasicCard';
import SearchBar from '../components/SearchBar';
import MainButton from '../components/MainButton';
import { Refresh } from '@mui/icons-material';

const Auth = () => {
  const getSearchBar = () => {
    return (
      <Box>
        <SearchBar
          placeholder='Caută numele clientului sau denumirea măsurii'
          onchange={(e) => handleChange(e.target.value)}
        />
        {/* <MainButton lanbel='oi' /> */}
        <IconButton>
          <Refresh />
        </IconButton>
      </Box>
    );
  };
  return (
    <Grid2 item xs={8}>
      <BasicCard header={getSearchBar()} sx={{ width: '100%' }} />
    </Grid2>
  );
};

export default Auth;
