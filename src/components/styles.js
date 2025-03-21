export const navbarStyles = {
  drawer: {
    width: 165,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 165,
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
      marginLeft: '-10px',
      fontWeight: '400',
      fontSize: '16px',
      textTransform: 'capitalize',
    },
  },
};
