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
    primary: { main: '#3a86ff' },
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
  },
  spacing: [4, 8, 12, 16, 28],
});
