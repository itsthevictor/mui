import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        contained: {
          // Some CSS
          backgroundColor: '#3a86ff',
          textTransform: 'capitalize',
        },
        outlined: { textTransform: 'capitalize' },
      },
    },
  },
  palette: {
    primary: { main: '#3a86ff', navText: '#d5f4ff' },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '1.6rem',
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
    h3: {
      fontSize: '1.1rem',
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
  },
  spacing: [4, 8, 12, 16, 28],
});
