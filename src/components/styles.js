export const navbarStyles = {
  drawer: {
    width: 'fit-content',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 'fit-content',
      paddingRight: '10px',
      boxSizing: 'border-box',
      backgroundColor: '#1a2247',
      color: '#d5f4ff',
    },
    '& .Mui-selected': {
      color: 'red',
    },
  },
  icons: { color: '#d5f4ff' },
  text: {
    '& span': {
      marginLeft: '-15px',
      fontWeight: '400',
      fontSize: '16px',
      textTransform: 'capitalize',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '1.7rem',
    paddingBottom: '1rem',
  },
  list: {
    marignTop: '3rem',
  },
};
