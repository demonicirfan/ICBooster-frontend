import { extendTheme } from '@chakra-ui/react';
import '@fontsource/lexend';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: '#ffffff',
      200: '#991FF',
      300: '#8CC0FD',
      400: '#969696',
      500: '#393939',
    },
  },
  fonts: {
    body: 'Lexend',
  },
  styles: {
    global: {
      'html, body': {
        background: '#ffffff',
        color: '#393939',
      },
    },
  },
});

export default theme;
