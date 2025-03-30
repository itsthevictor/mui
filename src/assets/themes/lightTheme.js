import { createTheme } from '@mui/material/styles';
import { blue, red, green } from '@mui/material/colors';

export const lightTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
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
    mode: 'light',
    primary: { main: blue[700], navText: '#d5f4ff' },
    pageHeading: {
      main: green[400],
      superDark: red[900],
      superLight: red[100],
    },
    navbar: {
      main: blue[700],
    },
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
});
