import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChannelProvider } from './Context/ChannelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChannelProvider>
        <App />
      </ChannelProvider>
    </BrowserRouter>
  </React.StrictMode>
);
