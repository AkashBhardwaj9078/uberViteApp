import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CaptainContext from './context/CpatainContext';

ReactDOM.render(
  <React.StrictMode>
    <CaptainContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CaptainContext>
  </React.StrictMode>,
  document.getElementById('root')
);
