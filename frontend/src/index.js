import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
  <BrowserRouter>
  <ChakraProvider>
  <Auth0Provider
    domain="dev-k3i7puzmfo73kpr8.us.auth0.com"
    clientId="afY6G1ns9S6TAgrnh7vRsOwD0MBHfuUY"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
  </ChakraProvider>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
