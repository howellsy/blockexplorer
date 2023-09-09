import { ThemeOptions } from '@mui/material';
import customPalette from './customPalette';

export const baseThemeOptions: ThemeOptions = {
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: '1px solid #e9ecef',
          borderRadius: '12px',
          boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 20%)',
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h2',
        },
      },
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e9ecef',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        body: {
          background: '#F5F5F5',
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: '#e9ecef',
          padding: '15px 16px',
        },
      },
    },
  },
  palette: { ...customPalette },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: '.9375rem',
      lineHeight: 1.375,
    },
  },
};
