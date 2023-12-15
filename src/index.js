import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from './components/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
