import {
  Grid2,
  Tooltip,
  Box,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';
import MainButton from '../components/MainButton';
import NotificationBell from '../components/NotificationBell';
import HelpIcon from '@mui/icons-material/Help';
import Logo from './Logo';
import zIndex from '@mui/material/styles/zIndex';

const Header = ({ title }) => {
  let array = [2134, 23, 423, 42, 34];
  const headerStyles = {
    wrapper: {
      width: '100%',
      backgroundColor: '#1a2247',
      color: '#f1f1f1',
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
    },
    topRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginButton: '20px',
      marginLeft: '185px',
      '*': {
        marginRight: '5px',
      },
    },
    middleRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginButton: '20px',
      marginLeft: '50px',
    },
    actions: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginButton: '20px',
      marginLeft: '50px',
    },
    link: {
      color: 'rgba(255,255,255, 0.7)',
      '&:hover': {
        color: '#f1f1f1',
        cursor: 'pointer',
      },
    },
    titles: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: '#d5f4ff',
      textTransform: 'capitalize',
    },
    icon: {
      color: '#f1f1f1',
    },
    webButton: '5px',
  };

  let menuItems = [
    { label: 'sdfasdfasdf' },
    { label: 'sdfasdfasdfasfdgasdf' },
    { label: 'asdfsthre5yhj65' },
  ];

  return (
    <Box sx={headerStyles.wrapper}>
      <Box sx={headerStyles.topRow}>
        <Box>
          <Typography variant='h6' sx={headerStyles.title}>
            {title}
          </Typography>
        </Box>
        <Box sx={headerStyles.actions}>
          {' '}
          {/* <Typography sx={headerStyles.link}>go to docs</Typography>
          <NotificationBell content={menuItems.length} menuItems={menuItems} /> */}
          <Avatar alt='Travis Howard' src='/2.jpg' />
        </Box>
      </Box>

      {/* <Box sx={headerStyles.middleRow}>
        <Box>
          <MainButton variant='outlined'>web setup</MainButton>
          <Tooltip title='help'>
            <IconButton>
              <HelpIcon sx={headerStyles.icon} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Header;
