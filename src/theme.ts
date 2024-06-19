'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette:{
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
        fontWeight: 700,
                color: "#983932"
    }
  },
});

export default theme;
