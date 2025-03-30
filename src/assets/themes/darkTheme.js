import { createTheme } from '@mui/material/styles';
import { blue, red, green } from '@mui/material/colors';
import { useColorScheme } from '@mui/material/styles';

export const darkTheme = createTheme({
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
    mode: 'dark',
    primary: { main: green[700], navText: '#d5f4ff' },
    background: {
      default: '#1c2247',
      paper: '#1c2247',
    },
    navbar: {
      main: '#1c2247',
    },
    pageHeading: {
      main: red[400],
      superDark: red[900],
      superLight: red[100],
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
