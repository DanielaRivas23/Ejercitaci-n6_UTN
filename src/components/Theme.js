import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: { 
      primary: '#2e3f95', 
      secondary: '#7ec0c7',
      buttonColor: '#272a2a',
      letterColor: '#ffffff',
      letterColorInput: '#777575',
      hover: '#050606',
    },
  },
});

export default theme;
