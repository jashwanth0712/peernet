import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider,extendTheme } from "@chakra-ui/react";

import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

const provider = new AuthProvider("5dbf9aaee836f4e74e237f82ed37810178a04352") // required
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<ProvideAuth provider={provider}>
<ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>

</ProvideAuth>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
